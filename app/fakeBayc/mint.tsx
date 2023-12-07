"use client";
import ABI from "./BAYC.js";
import { Button } from "@/components/ui/button";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { newtonsCradle } from "ldrs";
newtonsCradle.register();

const Mint = () => {
  const { config } = usePrepareContractWrite({
    address: "0x1dA89342716B14602664626CD3482b47D5C2005E",
    abi: ABI[0].abi,
    functionName: "claimAToken",
    onSettled(data, error) {
      console.log("Settled", { data, error });
    },
  });
  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  return (
    <div className="flex items-center justify-center space-y-2 flex-col">
      <Button className="w-[20vw]" disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? (
          <l-newtons-cradle
            size="78"
            speed="1.4"
            color="black"
          ></l-newtons-cradle>
        ) : (
          "Mint BAYC"
        )}
      </Button>
      {isSuccess && (
        <>
          <div>Successfully minted your NFT!</div>
          <Button
            onClick={() =>
              window.open(`https://sepolia.etherscan.io/tx/${data?.hash}`)
            }
            variant="secondary"
          >
            See Tx on Etherscan
          </Button>
        </>
      )}
    </div>
  );
};

export default Mint;
