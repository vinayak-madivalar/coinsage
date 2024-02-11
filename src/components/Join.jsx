import bitcoin from "../assets/bitcoin.png";
import eth from "../assets/ethereum.png";

const Join = () => {
  const handleClick = () => {
    window.location.href = "https://discord.com/";
  };

  return (
    <div className="flex items-center justify-evenly">
      <div>
        <img src={bitcoin} className="w-40 animate-bounce" />
      </div>
      <div className="flex flex-col items-center mt-24">
        <h1 className="text-8xl/tight  font-bold my-8 font-poppins text-center">
          JOIN US VIA <br />{" "}
          <span className="bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
            DISCORD
          </span>
        </h1>
        <p className="text-2xl mb-16 font-rubik">
          Invest and manage all your crypto at one place.
        </p>
        <button
          className="text-xl font-medium text-white rounded-full px-10 py-4 bg-gradient-to-r from-red-500 to-purple-500"
          onClick={handleClick}
        >
          Join via Discord
        </button>
      </div>
      <div>
        <img src={eth} className="animate-bounce w-52" />
      </div>
    </div>
  );
};

export default Join;
