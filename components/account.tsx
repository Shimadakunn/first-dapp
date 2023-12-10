import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useBlockNumber } from "wagmi";
import { useNetwork } from "wagmi";

const Account = () => {
  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useBlockNumber();
  const { chain, chains } = useNetwork();
  return (
    <>
      <div className="absolute top-4 right-4">
          <div className="absolute right-0">
            <w3m-button />
          </div>
          {isConnected && (
            <div className="mt-8 w-full text-right">
              Address: {address} <br />
              {isLoading && <div>Block Number Loading...</div>}
              {isError && <div>Block Number Error</div>}
              {!isLoading && !isError && (
                <div>Block Number: {Number(data)}</div>
              )}
              <div>Connected to {chain?.id}</div>
            </div>
          )}
      </div>
      {chain?.id !== 11155111 && isConnected && 
      (<div className="absolute w-[100vw] h-[95vh] z-10 bg-red-500 flex items-center justify-center text-[5rem]">
      GO BACK ON SEPOLIA NOW
  </div>)

      }
    </>
  );
};

export default Account;
