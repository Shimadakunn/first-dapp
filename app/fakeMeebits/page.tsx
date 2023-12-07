"use client";
import { useState } from "react";
import Account from '../../components/account'
import Mint from './components/claimButton'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"

const Page = () => {
  const [nftId, setNftId] = useState(0);

  return (
    <div className="w-full h-[95vh] flex items-center justify-center relative">
      <Account />
          <Card className="">
          <CardHeader>
            <CardTitle  className="">Claim Meebits NFT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>Enter ID of NFT that you want to claim</div>
            <Input placeholder="NFT ID" onChange={(e)=>setNftId(Number(e.target.value))}/>
          </CardContent>
          <CardFooter className="">
            <Mint id={nftId}/>
          </CardFooter>
        </Card>
    </div>
  );
};

export default Page;
