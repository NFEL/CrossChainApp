import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Skeleton, Table } from "antd";
import { getEllipsisTxt } from "../helpers/formatters";
import { getChainNameById } from "../helpers/networks";
import { UserBalances } from "./../utils/ERC20Balances";
// import { useAccount } from "wagmi";
import { getTokenPrice } from "./../utils/tokenPrice";
import { supportedChainIds } from "./../helpers/networks";
import { getExplorer } from "./../helpers/networks";

function ERC20Balance() {
  // const [assets, setAssets] = useState([]);
  // const [loading, setLoading] = useState(false);

  const [totalValue, setTotalValue] = useState(0);
  const loading = false;

  const assets = supportedChainIds.map(UserBalances).flat();

  const handleTableChange = (props) => {
    console.log({ props });
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const updatePrice = async (assets) => {
        // setLoading(true);
        let sum = 0;
        const assetValues = [];
        for (let i = 0; i < assets.length; i++) {
          const asset = assets[i];
          // await assets.forEach(async (asset) => {
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
              console.log({
                assetPrice,
                sum,
                balance: parseFloat(asset.balance / 10 ** asset.decimals),
                assetValue,
                assetValues,
              });
            }
          }
          // assetValues.forEach((val) => (sum += val));
        }
        return sum;
      };

      updatePrice(assets).then((newSum) => {
        setTotalValue(newSum);
      });
    }

    return () => {
      isMounted = false;
    };
  }, [assets]);

  // WORKS FROM HERE
  // const assets = getUserBalances();
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
      <Skeleton loading={!assets}>
        <Table
          // onRow={handleTableChange}
          loading={loading}
          dataSource={assets}
          columns={columns}
          rowKey={(record) => {
            return `${record.chainId}-${record.address}`;
          }}
          bordered={true}
          pagination={"top"}
          pageSize={5}
          onChange={handleTableChange}
        />
      </Skeleton>
    </div>
  );
}
export default ERC20Balance;
