import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Skeleton, Table } from "antd";
import { getEllipsisTxt } from "../helpers/formatters";
import { getChainNameById } from "../helpers/networks";
import { getUserBalances } from "./../utils/ERC20Balances";
// import { useAccount } from "wagmi";
import { getTokenPrice } from "./../utils/tokenPrice";
import { supportedChainIds } from "./../helpers/networks";

function ERC20Balance() {
  // const { data: assets } = useERC20Balances(props);
  const initAssets = supportedChainIds.map(getUserBalances).flat();
  const [assets, setAssets] = useState(initAssets);
  const [loading, setLoading] = useState(false);

  // const { address } = useAccount;

  const loadValuesFunc = async () => {
    setLoading(true);
    assets.forEach(async (asset) => {
      asset.price = `$ ${await getTokenPrice(asset.symbol)}`;
    });
    setLoading(false);
    return assets;
  };

  const handleTableChange = () => {};

  useEffect(() => {
    let isMounted = true;
    loadValuesFunc().then((data) => {
      if (isMounted) setAssets(data); // add conditional check
    });

    return () => {
      isMounted = false;
    };
  });

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
      render: (price) => price,
      // render: (symbol) => getTokenPrice(symbol),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (value, item) =>
        parseFloat(Moralis?.Units?.FromWei(value, item.decimals)).toFixed(6),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address) => getEllipsisTxt(address, 5),
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
      <h1>💰Token Balances</h1>
      <Skeleton loading={!assets}>
        <Table
          loading={loading}
          dataSource={assets}
          columns={columns}
          rowKey={(record) => {
            return `${record.chainId}-${record.address}`;
          }}
          onChange={handleTableChange}
        />
      </Skeleton>
    </div>
  );
}
export default ERC20Balance;
