"use client";
import Account from '../../components/account'
import ABI from './Nefturians.js';
import {useContractRead} from 'wagmi'
import Buy from "./buy";
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
    address: '0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED',
    abi: ABI[0].abi,
    functionName: 'tokenPrice',
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
    <div className="w-full h-[95vh] flex items-center justify-center space-x-2 relative">
      <Account />
          <Card className="">
          <CardHeader>
            <CardTitle  className="">Buy Nefeturians NFT</CardTitle>
          </CardHeader>
          <CardContent className="">
            <div>Floor Price: {Number(data) / 10 ** 18} ETH</div>
          </CardContent>
          <CardFooter className="">
            <Buy/>
          </CardFooter>
        </Card>
    </div>
  );
};

export default Page;
