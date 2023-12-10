"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Data {
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}

export default function SearchBar({ params }: { params: { tokenID: string } }) {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLoader() {
      const { newtonsCradle } = await import('ldrs')
      newtonsCradle.register()
    }
    getLoader()
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/${params.tokenID}`
        );
        if (!response.ok) {
          setLoading(false);
          setError(true);
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        setError(true);
        console.error("Error fetching data:", err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const match = data?.image.match(/ipfs:\/\/([a-zA-Z0-9]+)/);
  const hash = match ? match[1] : null;
  const url = "https://gateway.pinata.cloud/ipfs/"+hash;

  return (
    <div className="w-full h-[95vh] flex items-center justify-center">
      {
        data !== null && !error ?(
        <Card className="">
          <CardHeader>
            <CardTitle>NFT #{params.tokenID} Info</CardTitle>
          </CardHeader>
          <CardContent className="space-x-8 flex items-center justify-center">
            <img src={url} className="w-[20vw] h-auto"/>
            <div className="text-[1.5rem]">
              <h1 className="text-[2rem] font-bold">Attributes</h1>
              {data.attributes.map((attribute, index) => (
                <li key={index}>
                  <strong>{attribute.trait_type}:</strong> {attribute.value}
                </li>
              ))}
            </div>
          </CardContent>
        </Card>
        ):
        (
          <>
          {loading ? (
            <l-newtons-cradle
              size="250"
              speed="1.4"
              color="white"
            ></l-newtons-cradle>
          ) : (
            <Card className="bg-red-800">
            <CardHeader>
              <CardTitle  className="text-red-200">Error</CardTitle>
            </CardHeader>
            <CardContent className="text-red-300">
              There was an error fetching the data for this NFT.
            </CardContent>
          </Card>
          )}
          </>
        )
      }
    </div>
  );
}
