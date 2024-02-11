import wallet from "../assets/wallet.png";
import quantity from "../assets/copy-writing.png";
import transaction from "../assets/peer-to-peer.png";
import block from "../assets/blockchain.png";
import coin from "../assets/coin.png";
import market from "../assets/market.png";

const ChooseUs = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center text-5xl font-bold py-8 font-poppins bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-3 justify-items-center ">
        <div className="flex flex-col items-center text-center bg-slate-100 w-80 p-8 my-8 rounded-3xl ">
          <img src={wallet} width={80} className="max-w-full" />
          <h1 className="text-xl font-bold pt-4 pb-1 font-poppins">
            CONNECT YOUR WALLET
          </h1>
          <p className="text-lg font-rubik  ">
            Use Trust Wallet, Metamask or to connect to the app.
          </p>
        </div>
        <div className="flex flex-col  items-center text-center bg-orange-100 w-80 p-8 my-8 rounded-3xl ">
          <img src={quantity} width={80} />
          <h1 className="text-xl font-bold pt-4 pb-1 font-poppins">
            SELECT YOUR QUANTITY
          </h1>
          <p className="text-lg font-rubik">
            Upload your crypto and set a title, description and price.
          </p>
        </div>
        <div className="flex flex-col  items-center text-center bg-slate-100 w-80 p-8 my-8 rounded-3xl ">
          <img src={transaction} width={80} />
          <h1 className="text-xl font-bold pt-4 pb-1 font-poppins">
            CONFIRM TRANSACTION
          </h1>
          <p className="text-lg font-rubik">
            Earn by selling your crypto on our marketplace.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-orange-100 w-80 p-8 my-8 rounded-3xl">
          <img src={coin} width={80} />
          <h1 className="text-xl font-bold pt-4 pb-1 font-poppins">
            RECEIVE YOUR OWN NFTS
          </h1>
          <p className="text-lg font-rubik">
            Invest all your crypto at one place on one platform.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-slate-100 w-80 p-8 my-8 rounded-3xl ">
          <img src={market} width={80} />
          <h1 className="text-xl font-bold pt-4 pb-1 font-poppins">
            TAKE A MARKET TO SELL
          </h1>
          <p className="text-lg font-rubik">
            Discover, collect the right crypto collections to buy or sell.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-orange-100 w-80 p-8 my-8 rounded-3xl ">
          <img src={block} width={80} />
          <h1 className="text-xl font-bold pt-4 pb-1 font-poppins">
            DRIVE YOUR COLLECTION
          </h1>
          <p className="text-lg font-rubik">
            We make it easy to Discover, Invest and manage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
