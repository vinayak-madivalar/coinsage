const CoinList = (props) => {
  const { coinData } = props;

  const {
    name,
    current_price,
    price_change_percentage_24h,
    market_cap,
    image,
  } = coinData;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ",");
  }

  return (
    <div className=" py-4 font-rubik odd:bg-orange-50 even:bg-orange-100">
      <div className="grid grid-cols-4 items-center px-8">
        <p className="flex items-center gap-4 text-left text-xl font-semibold">
          <img src={image} width={50} />
          {name}
        </p>
        <p className="text-center text-xl font-semibold ">
          ₹ {numberWithCommas(current_price)}
        </p>
        <p
          className={`text-center text-xl font-semibold ${
            price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {price_change_percentage_24h.toFixed(2)} %
        </p>
        <p className="text-right text-xl font-semibold">
          ₹ {numberWithCommas(market_cap)}
        </p>
      </div>
    </div>
  );
};

export default CoinList;
