import { useEffect, Suspense, Profiler, lazy } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "./components/Account/Account";
// import Chains from "./components/Chains";
// import TokenPrice from "./components/TokenPrice";
// import ERC20Balance from "./components/ERC20Balance";
import ERC20Transfers from "./components/ERC20Transfers";
import DEX from "./components/DEX";
import NFTBalance from "./components/NFTBalance";
import Wallet from "./components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
// import NativeBalance from "./components/NativeBalance";
import "./style.css";
import Home from "./components/QuickStart";
import Contract from "./components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "./components/Ramper";
import MenuItems from "./components/MenuItems";

const ERC20Balance = lazy(() => import("./components/ERC20Balance"));
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();
  console.log(isServerInfo);
  // console.log({
  //   isWeb3Enabled,
  //   enableWeb3,
  //   isAuthenticated,
  //   isWeb3EnableLoading,
  // });
  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            {/* <Chains /> */}
            {/* <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            /> */}
            {/* <NativeBalance /> */}
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>

            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>

            <Route path="/erc20balance">
              <Profiler id="erc20balance">
                <Suspense fallback={<div>Loading</div>}>
                  <ERC20Balance />
                </Suspense>
              </Profiler>
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text>Cross Chain MVP</Text>
      </Footer>
    </Layout>
  );
};

// import { Applogo } from "./statics/logo.jpg";
export const Logo = () => (
  // TODO - Use Our logo
  <img src="/logo.jpg" style={{ maxWidth: "45px" }} alt="Application logo" />
);

export default App;
