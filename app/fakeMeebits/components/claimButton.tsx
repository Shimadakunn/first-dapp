"use client";
import { useEffect } from 'react'
import { Button } from "@/components/ui/button";

import checkId from "./checkId";
import mint from "./mint";

const Mint = ({id}:{id:number}) => {
  useEffect(() => {
    async function getLoader() {
      const { newtonsCradle } = await import('ldrs')
      newtonsCradle.register()
    }
    getLoader()
  }, [])
  const { data, isError, isLoading } = checkId(id);
  const { data: data2, isError: isError2, isLoading: isLoading2, write,isSuccess } = mint(id);
  return (
    <div className="flex items-center justify-center space-y-2 flex-col">
      <Button className="w-[20vw]" disabled={!write || data === true || isLoading2} onClick={() => write?.()}>
        {isLoading || isLoading2  ? (
          <l-newtons-cradle
            size="78"
            speed="1.4"
            color="black"
          ></l-newtons-cradle>
        ) : (
          "Claim Meebits"
        )}
      </Button>
      {isSuccess && (
        <>
          <div>Successfully minted your NFT!</div>
          <Button
            onClick={() =>
              window.open(`https://sepolia.etherscan.io/tx/${data2?.hash}`)
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
