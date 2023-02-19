import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CoinList from "../components/CoinList";
import { useState } from "react";
import { errorTypes } from "../utils/pennyData";

export default function Home() {
  const [error, setError] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  return (
    <>
      <Head>
        <title>Coin Errors</title>
        <meta name="description" content="errors in coins to check for" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="space-x-3 flex flex-row items-center mx-4 my-2">
          {/* <p>filters</p> */}
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
        <CoinList sortBy={sortBy} error={error} errorType={error} />
      </main>
    </>
  );
}
