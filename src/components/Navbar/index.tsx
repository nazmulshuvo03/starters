import { useContext } from "react";
import { WalletContext } from "../../providers/WalletProvider";
import { getShortenedAddress } from "../../functions/string";
import Button from "../Form/Button";
import { name } from "../../../package.json";

export default function Navbar() {
  const { getWalletAccess, walletAddress, disconnectWallet } =
    useContext(WalletContext);

  return (
    <div className="bg-primary text-text flex justify-between items-center px-5 py-3">
      <div className="text-text text-4xl font-bold font-mono">
        <span>{name.toLocaleUpperCase()}</span>
      </div>
      <Button
        className={`${walletAddress ? "bg-secondary" : "bg-button"} text-text`}
        onClick={walletAddress ? disconnectWallet : getWalletAccess}
      >
        {walletAddress ? getShortenedAddress(walletAddress) : "Connect Wallet"}
      </Button>
    </div>
  );
}
