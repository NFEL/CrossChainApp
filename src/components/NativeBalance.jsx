import { useNativeBalance } from "react-moralis";
import { useAccount } from "wagmi";

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const isAuthenticated = true;
  const { account } = useAccount();

  if (!account || !isAuthenticated) return null;

  return (
    <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
      {balance.formatted}
    </div>
  );
}

export default NativeBalance;
