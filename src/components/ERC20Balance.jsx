import { useMoralis } from "react-moralis";
import { Skeleton, Table } from "antd";
import { getEllipsisTxt } from "../helpers/formatters";
import { getUserBalances } from "./../utils/ERC20Balances";

function ERC20Balance(props) {
  // const { data: assets } = useERC20Balances(props);
  const assets = getUserBalances(props);
  // console.log({ props, assets });
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
      render: (chainId) => String(chainId).toUpperCase(),
    },
  ];

  return (
    <div style={{ width: "65vw", padding: "15px" }}>
      <h1>💰Token Balances</h1>
      <Skeleton loading={!assets}>
        <Table
          dataSource={assets}
          columns={columns}
          rowKey={(record) => {
            return record.token_address;
          }}
        />
      </Skeleton>
    </div>
  );
}
export default ERC20Balance;
