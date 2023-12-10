"use client"
import { useEffect } from "react";
import ABI from "./Nefturians.js";
import { Button } from "@/components/ui/button";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from 'viem';

const Mint = () => {
  useEffect(() => {
    async function getLoader() {
      const { newtonsCradle } = await import('ldrs')
      newtonsCradle.register()
    }
    getLoader()
  }, [])
  const { config } = usePrepareContractWrite({
    address: "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED",
    abi: ABI[0].abi,
    functionName: "buyAToken",
    value: parseEther('0.11'),
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
          "Buy Nefturians"
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
