import { useState } from "react";
import { useMoralis } from "react-moralis";
import { Button, Skeleton, Table, Space } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import { getEllipsisTxt } from "../helpers/formatters";
import { getChainNameById } from "../helpers/networks";
import { getTokenPrice } from "./../utils/tokenPrice";
import { getExplorer } from "./../helpers/networks";

import { useContractReads, erc20ABI, useAccount } from "wagmi";
import { MultiCallABI, allTokensInOrder } from "../Constants";

const tokenContracts = (walletAddress) => {
  return {
    tokens: allTokensInOrder,
    contracts: allTokensInOrder.map((token) => {
      if (token.address != "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") {
        return {
          addressOrName: token.address,
          contractInterface: erc20ABI,
          functionName: "balanceOf",
          args: [walletAddress],
          chainId: token.chain_id,
        };
      } else {
        //https:etherscan.io/address/0xca11bde05977b3631167028862be2a173976ca11#readContract#F9
        return {
          addressOrName: "0xca11bde05977b3631167028862be2a173976ca11",
          contractInterface: MultiCallABI,
          functionName: "getEthBalance",
          args: [walletAddress],
          chainId: token.chain_id,
        };
      }
    }),
  };
};

function ERC20Balance() {
  const [assets, setAssets] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const { address } = useAccount();
  const { contracts, tokens } = tokenContracts(address);

  const updatePrice = async (assets) => {
    let sum = 0;
    const assetValues = [];
    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];
      if (!asset.price) {
        // const assetPrice = 10;

        const assetPrice = await getTokenPrice(asset.symbol);
        if (assetPrice) {
          const assetValue =
            parseFloat(assetPrice) *
            parseFloat(asset.balance / 10 ** asset.decimals);
          assetValues.push(assetValue);
          asset.price = assetPrice;
          sum += assetValue;
        }
      }
      // assetValues.forEach((val) => (sum += val));
    }
    return { sum, assets };
  };

  const { isLoading, refetch, isFetching } = useContractReads({
    contracts,
    allowFailure: true,
    // suspense: true,
    // enabled: true,
    // onError: (err) => {
    //   console.error({ errorOnFetchingTokenBalacnes: err });
    // },
    onSuccess: (balances) => {
      const resBalances = [];
      if (balances) {
        for (let i = 0; i < balances.length; i++) {
          const balance = balances[i];
          if (balance) {
            if (Number(balance) > 0) {
              const token = tokens[i];
              resBalances.push({
                balance,
                chainId: token.chain_id,
                ...token,
              });
            }
          }
        }
      }
      setAssets(resBalances);

      updatePrice(resBalances).then(({ sum, assets }) => {
        setAssets(assets);
        setTotalValue(sum);
      });
    },
  });

  const handleTableChange = (props) => {
    console.log({ props });
  };

  const { Moralis } = useMoralis();

  const columns = [
    {
      title: "",
      dataIndex: "logo",
      key: "logo",
      render: (logo) => (
        <img
          src={logo || "https://etherscan.io/images/main/empty-token.png"}
          alt="nologo"
          min-width="28px"
          min-height="28px"
          width="28px"
          height="28px"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => name,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol) => symbol,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$ ${price}`,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (value, record) =>
        parseFloat(Moralis?.Units?.FromWei(value, record.decimals)).toFixed(6),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address, record) => (
        <a href={`${getExplorer(record.chainId)}/token/${address}`}>
          {getEllipsisTxt(address, 5)}
        </a>
      ),
    },

    {
      title: "Chain",
      dataIndex: "chainId",
      key: "chainId",
      render: (chainId) => getChainNameById(chainId),
    },
  ];

  return (
    <div style={{ width: "65vw", padding: "15px" }}>
      {/* <Table></Table> */}
      <h1>💰 Token Balances</h1>
      <h2>➕ Total : ${parseFloat(totalValue).toFixed(5)}</h2>
      {/* <Button onClick={refetch}> ♻ REFRESH </Button> */}
      <Space />
      <Button
        type="primary"
        ghost
        shape="circle"
        icon={<RedoOutlined />}
        loading={isFetching}
        onClick={refetch}
      />
      <Space />
      <Skeleton loading={isLoading}>
        <Table
          // onRow={handleTableChange}
          loading={isFetching}
          dataSource={assets}
          columns={columns}
          rowKey={(record) => {
            return `${record.chainId}-${record.address}`;
          }}
          bordered={true}
          showHeader={true}
          pagination={"topLeft"}
          pageSize={5}
          onChange={handleTableChange}
        />
      </Skeleton>
    </div>
  );
}
export default ERC20Balance;
