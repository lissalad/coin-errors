export default function CoinTab({ coin }) {
  const barStyle =
    "bg-orange-300 w-[35vw] absolute right-0 h-full p-4 flex flex-col items-center";

  if (coin.coin === "default") {
    console.log("DEFAULT DISPLAY");
    return (
      <div className={barStyle}>
        <img src="/images/cent.png" height="100" width="100" className="w-60" />
        <h1></h1>
      </div>
    );
  }

  return (
    <div className={barStyle}>
      <img src={`/images/${coin.image}`} height="100" />
      <h1>
        {coin.year} {coin.mark}
      </h1>
    </div>
  );
}
