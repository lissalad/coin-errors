import Coin from "./Coin";
import data from "../utils/pennyData";

export default function CoinList({ sortBy, errorType, setCoin }) {
  let sortedData = [];
  if (sortBy === "oldest") {
    sortedData = data.sort((a, b) => {
      return a.year - b.year;
    });
  } else if (sortBy === "newest") {
    sortedData = data.sort((a, b) => {
      return b.year - a.year;
    });
  }

  return (
    <div className="mt-8 grid gap-4 grid-cols-3 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-20 w-full">
      {sortedData
        .filter((coin) => {
          return coin.error === errorType || errorType === "all";
        })
        .map((coin, e) => (
          <Coin coin={coin} key={e} setCoin={setCoin} />
        ))}
    </div>
  );
}
