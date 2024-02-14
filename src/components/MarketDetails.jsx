import { useContext, useState } from "react";
import CoinList from "./CoinList";
import { Link } from "react-router-dom";
import { ApiDataContext } from "../utilities/ApiDataContext";

const MarketDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinPerPage, setCoinPerPage] = useState(10);

  const currencyData = useContext(ApiDataContext);

  const indexOfLastCoin = currentPage * coinPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinPerPage;
  const currentCoins = currencyData.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginationNumber = [];
  for (let i = 1; i <= currencyData.length / coinPerPage; i++) {
    paginationNumber.push(i);
  }

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollMarket();
  };

  const scrollMarket = () => {
    window.scrollTo({
      top: window.scrollY - 800,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1 className="py-2 font-semibold text-5xl my-12 font-poppins text-center bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
        Market Updates
      </h1>
      <div className="grid grid-cols-4  justify-evenly  py-3 px-8 bg-orange-300 font-rubik">
        <p className="text-2xl font-semibold font-poppins">Coin</p>
        <p className="text-2xl text-center font-semibold font-poppins">Price</p>
        <p className="text-2xl text-center font-semibold font-poppins">
          24hr Change
        </p>
        <p className="text-2xl text-center font-semibold font-poppins">
          Market Cap
        </p>
      </div>
      <div>
        {currentCoins.map((coin) => (
          <Link to={"/coin/" + coin.id} key={coin.id}>
            <CoinList coinData={coin} />
          </Link>
        ))}
      </div>
      <div className="flex gap-4 justify-center my-12">
        {paginationNumber.map((data) => (
          <button
            key={data}
            onClick={() => handlePagination(data)}
            className={`rounded-full bg-slate-300 px-4 py-2 ${
              currentPage === data ? "bg-slate-900 text-white" : ""
            }`}
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MarketDetails;
