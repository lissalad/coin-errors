import Coin from "./Coin";
import data from "../utils/pennyData";

export default function CoinList({ sortBy, errorType }) {
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

  console.log(sortBy);
  console.log(sortedData);

  return (
    <div className="mt-8 grid gap-4 grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-20">
      {sortedData
        .filter((coin) => {
          return coin.error === errorType || errorType === "all";
        })
        .map((coin, e) => (
          <Coin coin={coin} key={e}></Coin>
        ))}
    </div>
  );
}
