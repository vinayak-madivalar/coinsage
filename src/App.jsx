import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<CoinDetails />} />
      </Routes>
    </>
  );
};

export default App;
