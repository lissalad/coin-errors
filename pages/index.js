import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CoinList from "../components/CoinList";
import { useState } from "react";
import { errorTypes } from "../utils/pennyData";
import CoinTab from "../components/CoinTab";

export default function Home() {
  const [error, setError] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [coin, setCoin] = useState({ coin: "default" });

  console.log(coin);

  return (
    <>
      <Head>
        <title>Coin Errors</title>
        <meta name="description" content="errors in coins to check for" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="flex flex-row items-start w-full justify-between relative">
          <div className="p-4">
            {/* <p>filters</p> */}
            <div className="space-x-3 flex flex-row items-center">
              {/* SORT BY */}
              <select
                className="dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest" className="">
                  sort by newest
                </option>
                <option value="oldest" className="">
                  sort by oldest
                </option>
              </select>
              {/* SELECT ERROR */}
              <select
                className="dropdown"
                value={error}
                onChange={(e) => setError(e.target.value)}
              >
                <option value="all">all error types</option>
                {errorTypes.map((type, i) => (
                  <option key={i} value={type} className="">
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <CoinList
              sortBy={sortBy}
              error={error}
              errorType={error}
              setCoin={setCoin}
            />
          </div>
          {/* <CoinTab coin={coin} /> */}
        </div>
      </main>
    </>
  );
}
