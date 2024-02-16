import { useContext } from "react";
import { ApiDataContext } from "../utilities/ApiDataContext";
import { Link } from "react-router-dom";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const Market = () => {
  const currencyData = useContext(ApiDataContext);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ",");
  }

  return (
    <div>
      <div className="font-poppins font-semibold text-5xl text-center mt-4 mb-12 bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
        <p>Market Data</p>
      </div>
      <div className="overflow-auto">
        <table className="border-collapse table-auto w-full ">
          <thead className="font-poppins text-xl">
            <tr className="bg-blue-100 uppercase">
              <th className="border-2 border-b-4 px-4 py-2">#</th>
              <th className="border-2 border-b-4 border-r-4 px-4 py-2">Name</th>
              <th className="border-2 border-b-4 px-4 py-2">Price</th>
              <th className="border-2 border-b-4 px-4 py-2">Changes 24H</th>
              <th className="border-2 border-b-4 px-4 py-2">Changes 7D</th>
              <th className="border-2 border-b-4 px-4 py-2">Changes 30D</th>
              <th className="border-2 border-b-4 px-4 py-2">Market Cap</th>
              <th className="border-2 border-b-4 px-4 py-2">
                Circulating Supply
              </th>
            </tr>
          </thead>
          <tbody className="font-rubik text-lg font-medium">
            {currencyData.map((item) => (
              <tr key={item?.id} className="odd:bg-slate-100 even:bg-slate-50">
                <td className="border-b-2 px-4 py-2 ">
                  #{item?.market_cap_rank}
                </td>
                <td className="border-r-4 border-b-2 px-4 py-2 uppercase">
                  <Link to={"/coin/" + item?.id}>
                    <div className="flex items-center gap-4 text-sm mb-2">
                      <img src={item?.image} width={40} /> ({item?.symbol})
                    </div>
                  </Link>
                  {item?.name}
                </td>
                <td className="border-b-2 px-4 py-2 text-center">
                  ₹ {numberWithCommas(item?.current_price)}
                </td>
                <td
                  className={`border-b-2 px-4 py-2 text-center ${
                    item?.price_change_percentage_24h_in_currency >= 0
                      ? " text-green-600"
                      : " text-red-600"
                  }`}
                >
                  <div className="flex items-center gap-1 justify-center">
                    {item?.price_change_percentage_24h_in_currency >= 0 ? (
                      <FaLongArrowAltUp color="green" />
                    ) : (
                      <FaLongArrowAltDown color="red" />
                    )}
                    {item?.price_change_percentage_24h_in_currency.toFixed(2)}%
                  </div>
                </td>
                <td
                  className={`border-b-2 px-4 py-2 text-center ${
                    item?.price_change_percentage_7d_in_currency >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <div className="flex items-center gap-1 justify-center">
                    {item?.price_change_percentage_7d_in_currency >= 0 ? (
                      <FaLongArrowAltUp color="green" />
                    ) : (
                      <FaLongArrowAltDown color="red" />
                    )}
                    {item?.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </div>
                </td>
                <td
                  className={`border-b-2 px-4 py-2 text-center ${
                    item?.price_change_percentage_30d_in_currency >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <div className="flex items-center gap-1 justify-center">
                    {item?.price_change_percentage_30d_in_currency >= 0 ? (
                      <FaLongArrowAltUp color="green" />
                    ) : (
                      <FaLongArrowAltDown color="red" />
                    )}
                    {item?.price_change_percentage_30d_in_currency.toFixed(2)}%
                  </div>
                </td>
                <td className="border-b-2 px-4 py-2 text-center">
                  ₹{" "}
                  {numberWithCommas(
                    (item?.market_cap / 1000000000000).toFixed(2)
                  )}{" "}
                  T
                </td>
                <td className="uppercase border-b-2 text-center px-4 py-2">
                  {numberWithCommas(
                    (item?.circulating_supply / 1000000).toFixed(2)
                  )}{" "}
                  M {item?.symbol}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;
