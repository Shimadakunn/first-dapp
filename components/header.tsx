"use client"
import { useRouter, useSearchParams } from "next/navigation";

import { Sparkles,Rotate3D,Activity,Home} from 'lucide-react';
export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full h-[5vh] bg-slate-800 flex items-center justify-around">
      <Home className="cursor-pointer" onClick={() => {router.push("/");}}>HomePage</Home>
      <Sparkles className="cursor-pointer" onClick={() => {router.push("/fakeBayc");}}/>
      <Activity className="cursor-pointer" onClick={() => {router.push("/fakeNefturians");}}/>
      <Rotate3D className="cursor-pointer" onClick={() => {router.push("/fakeMeebits");}}/>
    </div>
    
  );
}