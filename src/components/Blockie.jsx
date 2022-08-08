import { Skeleton } from "antd";
import Blockies from "react-blockies";
import { useAccount } from "wagmi";

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

function Blockie(props) {
  const isAuthenticated = true;
  const { account } = useAccount();
  if (!props.address && (!account || !isAuthenticated))
    return <Skeleton.Avatar active size={40} />;

  return (
    <Blockies
      seed={
        props.currentWallet
          ? account.toLowerCase()
          : props.address.toLowerCase()
      }
      className="identicon"
      {...props}
    />
  );
}

export default Blockie;
