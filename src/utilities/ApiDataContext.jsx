import { createContext, useState, useEffect } from "react";
import { MARKET_DETAILS_API } from "./constants";

const ApiDataContext = createContext([]);

const ApiDataProvider = ({ children }) => {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.error("Error Fetching Data:", err);
    }
  }, []);

  const fetchData = async () => {
    const data = await fetch(MARKET_DETAILS_API);
    const json = await data.json();
    console.log(json);
    setCurrencyData(json);
  };

  return (
    <ApiDataContext.Provider value={currencyData}>
      {children}
    </ApiDataContext.Provider>
  );
};

export { ApiDataContext, ApiDataProvider };
