"use client"
import {useState, useEffect} from "react";

import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
  } from "wagmi";
import ABICLAIMER from './Meebits_claimer.js';
import { parseEther } from 'viem';
import fetch from "./fetch";


const getClaimedTokens = (nftId:Number) => {
  const [signature, setSignature] = useState('');
  useEffect(() => {
    const getSignature = async () => {
      const signature = await fetch(nftId);
      setSignature(signature);
      console.log(signature);
    };
    getSignature();
  }, [nftId]);
    const { config } = usePrepareContractWrite({
        address: "0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55",
        abi: ABICLAIMER[0].abi,
        functionName: "claimAToken",
        args: [nftId,signature],
        value: parseEther('0'),
        onSettled(data, error) {
          console.log("Settled", { data, error });
        },
      });
      const { data, error, isError, write } = useContractWrite(config);
      const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      });

  return { data, isError, isLoading,write,isSuccess };
};

export default getClaimedTokens;
