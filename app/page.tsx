"use client"
import Account from '../components/account'
export default function Home() {

  return (
      <div className="w-full h-[95vh] flex items-center justify-center relative">
          Welcome to My DAPP
          <Account/>
      </div>
  );
}