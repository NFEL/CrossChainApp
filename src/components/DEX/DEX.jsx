import { useState, useEffect, useMemo } from "react";
import { useMoralis } from "react-moralis";
import InchModal from "./components/InchModal";
import useInchDex from "../../hooks/useInchDex";
import { Button, Card, Image, Input, InputNumber, Modal } from "antd";
import Text from "antd/lib/typography/Text";
import { ArrowDownOutlined } from "@ant-design/icons";
import { useTokenPrice } from "react-moralis";
import { tokenValue } from "../../helpers/formatters";
import {
  getWrappedNative,
  getChainIdByName,
  nativeAddress,
  IsNative,
  getExplorer,
} from "../../helpers/networks";
import {
  useAccount,
  useNetwork,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";

import { StageSpinner } from "react-spinners-kit";
const styles = {
  card: {
    width: "430px",
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    fontSize: "16px",
    fontWeight: "500",
  },
  input: {
    padding: "0",
    fontWeight: "500",
    fontSize: "23px",
    display: "block",
    width: "100%",
  },
  priceSwap: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    color: "#434343",
    marginTop: "8px",
    padding: "0 10px",
  },
};

function DEX({ chain, customTokens = {} }) {
  const { chain: _chain } = useNetwork();
  const { address: walletAddress, isConnected: isInitialized } = useAccount();
  const chainId = _chain.id;
  const { trySwap, tokenList, getQuote } = useInchDex(chain);
  const { Moralis } = useMoralis();
  const [isFromModalActive, setFromModalActive] = useState(false);
  const [isToModalActive, setToModalActive] = useState(false);
  const [fromToken, setFromToken] = useState();
  const [toToken, setToToken] = useState();
  const [fromAmount, setFromAmount] = useState();
  const [isConfirmModalAcive, setIsConfirmModalAcive] = useState();
  // const [isConfirmModalLoading, setIsConfirmModalLoading] = useState(false);
  const [quote, setQuote] = useState();
  const [swapTRX, setSwapTRX] = useState();
  const [currentTrade, setCurrentTrade] = useState();
  const { fetchTokenPrice } = useTokenPrice();
  const [tokenPricesUSD, setTokenPricesUSD] = useState({});

  const tokens = useMemo(() => {
    return { ...customTokens, ...tokenList };
  }, [customTokens, tokenList]);

  const fromTokenPriceUsd = useMemo(
    () =>
      tokenPricesUSD?.[fromToken?.["address"]]
        ? tokenPricesUSD[fromToken?.["address"]]
        : null,
    [tokenPricesUSD, fromToken],
  );

  const toTokenPriceUsd = useMemo(
    () =>
      tokenPricesUSD?.[toToken?.["address"]]
        ? tokenPricesUSD[toToken?.["address"]]
        : null,
    [tokenPricesUSD, toToken],
  );

  const fromTokenAmountUsd = useMemo(() => {
    if (!fromTokenPriceUsd || !fromAmount) return null;
    return `~$ ${(fromAmount * fromTokenPriceUsd).toFixed(4)}`;
  }, [fromTokenPriceUsd, fromAmount]);

  const toTokenAmountUsd = useMemo(() => {
    if (!toTokenPriceUsd || !quote) return null;
    return `~$ ${(
      Moralis?.Units?.FromWei(quote?.toTokenAmount, quote?.toToken?.decimals) *
      toTokenPriceUsd
    ).toFixed(4)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toTokenPriceUsd, quote]);

  // tokenPrices
  useEffect(() => {
    if (!isInitialized || !fromToken || !chain) return null;
    const validatedChain = chain ? getChainIdByName(chain) : chainId;
    const tokenAddress = IsNative(fromToken["address"])
      ? getWrappedNative(validatedChain)
      : fromToken["address"];
    fetchTokenPrice({
      params: {
        chain: `0x${Number(validatedChain).toString(16)}`,
        address: tokenAddress,
      },
      onSuccess: (price) =>
        setTokenPricesUSD({
          ...tokenPricesUSD,
          [fromToken["address"]]: price["usdPrice"],
        }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain, isInitialized, fromToken]);

  useEffect(() => {
    if (!isInitialized || !toToken || !chain) return null;

    const validatedChain = chain ? getChainIdByName(chain) : chainId;
    const tokenAddress = IsNative(toToken["address"])
      ? getWrappedNative(validatedChain)
      : toToken["address"];

    fetchTokenPrice({
      params: {
        chain: `0x${Number(validatedChain).toString(16)}`,
        address: tokenAddress,
      },
      onSuccess: (price) =>
        setTokenPricesUSD({
          ...tokenPricesUSD,
          [toToken["address"]]: price["usdPrice"],
        }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain, isInitialized, toToken]);

  useEffect(() => {
    if (!tokens || fromToken) return null;
    setFromToken(tokens[nativeAddress]);
  }, [tokens, fromToken]);

  const ButtonState = useMemo(() => {
    if (chainId != getChainIdByName(chain)) {
      return { isActive: false, text: `Switch to ${chain}` };
    }
    if (!fromAmount) return { isActive: false, text: "Enter an amount" };
    if (fromAmount && currentTrade) return { isActive: true, text: "Swap" };
    return { isActive: false, text: "Select tokens" };
  }, [fromAmount, currentTrade, chainId, chain]);

  useEffect(() => {
    if (fromToken && toToken && fromAmount)
      setCurrentTrade({ fromToken, toToken, fromAmount, chain });
  }, [toToken, fromToken, fromAmount, chain]);

  useEffect(() => {
    if (currentTrade) {
      getQuote(currentTrade).then((quote) => setQuote(quote));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrade]);
  const { config } = usePrepareSendTransaction({
    request: {
      ...swapTRX,
      // to: swapTRX.to,
      // value: swapTRX.value,
      // data: swapTRX.data,
      // from: walletAddress,
    },
  });
  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const PriceSwap = () => {
    const Quote = quote;
    if (!Quote || !tokenPricesUSD?.[toToken?.["address"]]) return null;
    if (Quote?.statusCode === 400) return <>{Quote.message}</>;
    const { fromTokenAmount, toTokenAmount } = Quote;
    const { symbol: fromSymbol } = fromToken;
    const { symbol: toSymbol } = toToken;
    const pricePerToken = parseFloat(
      tokenValue(fromTokenAmount, fromToken["decimals"]) /
        tokenValue(toTokenAmount, toToken["decimals"]),
    ).toFixed(6);
    return (
      <Text style={styles.priceSwap}>
        Price:{" "}
        <Text>{`1 ${toSymbol} = ${pricePerToken} ${fromSymbol} ($${tokenPricesUSD[
          [toToken["address"]]
        ].toFixed(6)})`}</Text>
      </Text>
    );
  };

  return (
    <>
      <Card style={styles.card} bodyStyle={{ padding: "18px" }}>
        <Card
          style={{ borderRadius: "1rem" }}
          bodyStyle={{ padding: "0.8rem" }}
        >
          <div
            style={{ marginBottom: "5px", fontSize: "14px", color: "#434343" }}
          >
            From
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
            }}
          >
            <div>
              <InputNumber
                bordered={false}
                placeholder="0.00"
                style={{ ...styles.input, marginLeft: "-10px" }}
                onChange={setFromAmount}
                value={fromAmount}
              />
              <Text style={{ fontWeight: "600", color: "#434343" }}>
                {fromTokenAmountUsd}
              </Text>
            </div>
            <Button
              style={{
                height: "fit-content",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "0.6rem",
                padding: "5px 10px",
                fontWeight: "500",
                fontSize: "17px",
                gap: "7px",
                border: "none",
              }}
              onClick={() => setFromModalActive(true)}
            >
              {fromToken ? (
                <Image
                  src={
                    fromToken?.logoURI ||
                    "https://etherscan.io/images/main/empty-token.png"
                  }
                  alt="nologo"
                  width="30px"
                  preview={false}
                  style={{ borderRadius: "15px" }}
                />
              ) : (
                <span>Select a token</span>
              )}
              <span>{fromToken?.symbol}</span>
              <Arrow />
            </Button>
          </div>
        </Card>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <ArrowDownOutlined />
        </div>
        <Card
          style={{ borderRadius: "1rem" }}
          bodyStyle={{ padding: "0.8rem" }}
        >
          <div
            style={{ marginBottom: "5px", fontSize: "14px", color: "#434343" }}
          >
            To
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
            }}
          >
            <div>
              <Input
                bordered={false}
                placeholder="0.00"
                style={styles.input}
                readOnly
                value={
                  quote
                    ? parseFloat(
                        Moralis?.Units?.FromWei(
                          quote?.toTokenAmount,
                          quote?.toToken?.decimals,
                        ),
                      ).toFixed(6)
                    : ""
                }
              />
              <Text style={{ fontWeight: "600", color: "#434343" }}>
                {toTokenAmountUsd}
              </Text>
            </div>
            <Button
              style={{
                height: "fit-content",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "0.6rem",
                padding: "5px 10px",
                fontWeight: "500",
                fontSize: "17px",
                gap: "7px",
                border: "none",
              }}
              onClick={() => setToModalActive(true)}
              type={toToken ? "default" : "primary"}
            >
              {toToken ? (
                <Image
                  src={
                    toToken?.logoURI ||
                    "https://etherscan.io/images/main/empty-token.png"
                  }
                  alt="nologo"
                  width="30px"
                  preview={false}
                  style={{ borderRadius: "15px" }}
                />
              ) : (
                <span>Select a token</span>
              )}
              <span>{toToken?.symbol}</span>
              <Arrow />
            </Button>
          </div>
        </Card>
        {quote && (
          <div>
            <Text
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "15px",
                color: "#434343",
                marginTop: "8px",
                padding: "0 10px",
              }}
            >
              Estimated Gas: <Text>{quote?.estimatedGas}</Text>
            </Text>
            <PriceSwap />
          </div>
        )}
        <Button
          type="primary"
          size="large"
          style={{
            width: "100%",
            marginTop: "15px",
            borderRadius: "0.6rem",
            height: "50px",
          }}
          onClick={() =>
            trySwap({ ...currentTrade, walletAddress }).then((tx) => {
              setSwapTRX(tx);
              setIsConfirmModalAcive(true);
            })
          }
          disabled={!ButtonState.isActive}
        >
          {ButtonState.text}
        </Button>
      </Card>
      <Modal
        title="Select a token"
        visible={isFromModalActive}
        onCancel={() => setFromModalActive(false)}
        bodyStyle={{ padding: 0 }}
        width="450px"
        footer={null}
      >
        <InchModal
          open={isFromModalActive}
          onClose={() => setFromModalActive(false)}
          setToken={setFromToken}
          tokenList={tokens}
        />
      </Modal>
      <Modal
        title="Confirm Swap"
        visible={isConfirmModalAcive}
        bodyStyle={{ padding: "10vw" }}
        onCancel={() => setIsConfirmModalAcive(false)}
        width="450px"
        footer={null}
      >
        {isLoading && <StageSpinner loading={isLoading} />}
        <Text>
          Success : {isSuccess && <Text>Yes</Text>}
          {!isSuccess && <Text>No</Text>}
          <br />
          Loading : {isLoading && <Text>Yes</Text>}
          {!isLoading && <Text>No</Text>}
          <br />
        </Text>

        <Button
          disabled={isLoading}
          onClick={() => {
            sendTransaction();
          }}
        >
          Send
        </Button>
        {isSuccess && (
          <div>
            Successfully Done {JSON.stringify(currentTrade)} !
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${getExplorer(chainId)}/tx/${data?.hash}`}
              >
                View Transaction on Scanner
              </a>
            </div>
          </div>
        )}
      </Modal>
      <Modal
        title="Select a token"
        visible={isToModalActive}
        onCancel={() => setToModalActive(false)}
        bodyStyle={{ padding: 0 }}
        width="450px"
        footer={null}
      >
        <InchModal
          open={isToModalActive}
          onClose={() => setToModalActive(false)}
          setToken={setToToken}
          tokenList={tokens}
        />
      </Modal>
    </>
  );
}

export default DEX;

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
