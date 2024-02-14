import { useEffect, useState } from "react";
import { TOP_COINS_API } from "../utilities/constants";
import crypto from "../assets/crypto.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchData = async () => {
    const data = await fetch(TOP_COINS_API);
    const json = await data.json();
    console.log(json);
    setCurrencyData(json);
    setLoading(false);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ",");
  }

  return (
    <div>
      <div className="pb-20 ">
        <div className="flex flex-row items-center justify-center">
          <div className="pl-20">
            <h1 className="text-6xl/normal  font-semibold font-poppins">
              Track & Trade
              <span className="bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
                <br />
                Crypto with Confidence
              </span>
            </h1>
            <p className="text-xl font-normal py-4 font-rubik">
              The place where you can trade cryptocurrencies
              <br /> with global market price
            </p>
            <button className="flex flex-row items-center gap-2 rounded-sm text-xl text-white font-semibold mt-4 px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500">
              Get Started
            </button>
          </div>
          <img src={crypto} className="w-2/5 mr-20" />
        </div>
        <div className="mt-32 mb-16 text-5xl text-center font-poppins font-bold">
          <span className="bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
            Top 5 Crypto Currencies
          </span>
        </div>
        <div
          className={`flex flex-wrap justify-evenly ${
            loading === true ? "animate-spin" : ""
          }`}
        >
          {currencyData.map((item) => (
            <Link key={item?.id} to={"/coin/" + item?.id}>
              <div className="flex flex-col gap-2 items-center p-8 bg-orange-100 rounded-xl shadow-xl hover:scale-110">
                <img src={item?.image} alt={item?.name} className="w-24" />
                <p className="text-xl font-semibold font-poppins">
                  {item?.name}
                </p>
                <p className="text-lg font-medium font-rubik">
                  Rank: #{item?.market_cap_rank}
                </p>
                <div className="flex items-center gap-2">
                  <p
                    className={`text-left text-lg font-rubik font-medium ${
                      item?.price_change_percentage_24h >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item?.price_change_percentage_24h.toFixed(2)} %
                  </p>
                  <p className="text-lg font-rubik font-medium">
                    ₹ {numberWithCommas(item?.current_price)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
