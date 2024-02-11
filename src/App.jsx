import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Join from "./components/Join";
import MarketDetails from "./components/MarketDetails";

const App = () => {
  return (
    <div className="">
      <Home />
      <MarketDetails />
      <ChooseUs />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
