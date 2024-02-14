import ChooseUs from "../components/ChooseUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Join from "../components/Join";
import MarketDetails from "../components/MarketDetails";
import { ApiDataProvider } from "../utilities/ApiDataContext";

const Home = () => {
  return (
    <>
      <Hero />
      <ApiDataProvider>
        <MarketDetails />
      </ApiDataProvider>
      <ChooseUs />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
