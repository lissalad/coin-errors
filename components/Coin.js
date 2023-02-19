export default function Coin({ coin, setCoin }) {
  return (
    <div
      className="group flex items-center justify-center flex-col"
      onClick={setCoin(coin)}
    >
      <div className="bg-orange-700 w-[80px] h-[80px] rounded-full overflow-hidden text-orange-50 border-orange-500 border-4 flex justify-center items-center text-center">
        <h1>
          {coin.year} {coin.mark}
        </h1>
      </div>
      <p className="text-xs mt-2 group-hover:visible text-center">
        {coin.error}
      </p>
    </div>
  );
}
