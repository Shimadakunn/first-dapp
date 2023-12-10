"use client";
import Account from "../../components/account";
import ABI from './components/BAYC.js';
import {useContractRead} from 'wagmi'
import Mint from "./components/mint";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  const { data, isError, isLoading } = useContractRead({
    address: '0x1dA89342716B14602664626CD3482b47D5C2005E',
    abi: ABI[0].abi,
    functionName: 'totalSupply',
    onSuccess(data) {
      console.log('Success', data)
    },onError(error) {
      console.log('Error', error)
    },
    onSettled(data, error) {
      console.log('Settled', {ABI, data, error })
    },
  })
  
  return (
    
    <div className="w-full h-[95vh] flex items-center justify-center relative">
      <Account />    
      <Card className="">
          <CardHeader>
            <CardTitle  className="">Buy BAYC NFT</CardTitle>
          </CardHeader>
          <CardContent className="">
            <div>{!isLoading && !isError && (<>
          Total BAYC Supply: {String(data)}</>)}</div>
          </CardContent>
          <CardFooter className="">
          <Mint/>
          </CardFooter>
        </Card>
    </div>
  );
};

export default Page;
