import React from "react";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../helpers/formatters";
import { getExplorer } from "../helpers/networks";
import "antd/dist/antd.css";
import { Skeleton, Table } from "antd";
import { useTransactionHistory } from "../hooks/useTransactionHistory";

function TransactionHistory() {
  const { transactionHistory, chainId } = useTransactionHistory();
  const { Moralis } = useMoralis();

  const columns = [
    {
      title: "Time",
      dataIndex: "timeStamp",
      key: "timeStamp",
      render: (timeStamp) =>
        new Date(timeStamp * 1000).toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
        }),
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
          href={`${getExplorer(chainId)}/tx/${hash}`}
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
      <h1>💸 Transaction History</h1>
      <Skeleton loading={!transactionHistory}>
        <Table
          dataSource={transactionHistory}
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

export default TransactionHistory;
