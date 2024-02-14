import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import Market from "./pages/Market";
import { ApiDataProvider } from "./utilities/ApiDataContext";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<CoinDetails />} />
        <Route
          path="/market"
          element={
            <ApiDataProvider>
              <Market />
            </ApiDataProvider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
