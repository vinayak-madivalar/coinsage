import { useContext, useState } from "react";
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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ",");
  }

  return (
    <div>
      <h1 className="py-2 font-semibold text-5xl my-12 font-poppins text-center bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
        Market Updates
      </h1>
      <div className="overflow-auto">
        <table className="border-collapse table-auto lg:table-fixed w-full ">
          <thead className="bg-orange-300 font-poppins">
            <tr>
              <th className="text-2xl text-left font-semibold font-poppins px-8 py-4">
                Coin
              </th>
              <th className="text-2xl text-center font-semibold font-poppins px-4 py-4">
                Price
              </th>
              <th className="text-2xl text-center font-semibold font-poppins px-4 py-4">
                24hr Change
              </th>
              <th className="text-2xl text-center font-semibold font-poppins px-4 py-4">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {currentCoins.map((coin) => (
              <tr key={coin.id} className="odd:bg-orange-50 even:bg-orange-100">
                <td className="text-left text-xl font-bold px-8 py-4">
                  <Link to={"/coin/" + coin.id}>
                    <div className="flex items-center justify-start gap-4">
                      <img src={coin?.image} width={50} />
                      {coin?.name}
                    </div>
                  </Link>
                </td>
                <td className="text-center text-xl font-semibold ">
                  ₹ {numberWithCommas(coin?.current_price)}
                </td>
                <td
                  className={`text-center text-xl font-semibold ${
                    coin?.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin?.price_change_percentage_24h.toFixed(2)} %
                </td>
                <td className="text-center text-xl font-semibold">
                  ₹{" "}
                  {numberWithCommas(
                    (coin?.market_cap / 1000000000000).toFixed(2)
                  )}{" "}
                  Trillion
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
