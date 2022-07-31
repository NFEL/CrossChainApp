import React from "react";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../../helpers/formatters";
import { getExplorer } from "../../helpers/networks";
import "antd/dist/antd.css";
import { Skeleton, Table } from "antd";
import { useERC20Transfers } from "../../hooks/useERC20Transfers";

function ERC20Transfers() {
  const { ERC20Transfers, chainId } = useERC20Transfers();
  console.log({ ERC20Transfers });
  const { Moralis } = useMoralis();

  const columns = [
    {
      title: "Token",
      dataIndex: "tokenSymbol",
      key: "tokenSymbol",
      render: (token) => token,
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      render: (from) => getEllipsisTxt(from, 8),
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
      render: (to) => getEllipsisTxt(to, 8),
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (value, item) =>
        parseFloat(Moralis.Units.FromWei(value, item.decimals)).toFixed(6),
    },
    {
      title: "Hash",
      dataIndex: "hash",
      key: "hash",
      render: (hash) => (
        <a
          href={`${getExplorer(chainId)}tx/${hash}`}
          target="_blank"
          rel="noreferrer"
        >
          View Transaction
        </a>
      ),
    },
  ];

  let key = 0;
  return (
    <div style={{ width: "65vw", padding: "15px" }}>
      <h1>💸ERC20 Transfers</h1>
      <Skeleton loading={!ERC20Transfers}>
        <Table
          dataSource={ERC20Transfers}
          columns={columns}
          rowKey={(record) => {
            key++;
            return `${record.transaction_hash}-${key}`;
          }}
        />
      </Skeleton>
    </div>
  );
}

export default ERC20Transfers;
