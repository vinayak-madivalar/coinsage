import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { COIN_DETAILS } from "../utilities/constants";

const CoinDetails = () => {
  const [coinData, setCoinData] = useState({});

  const { coinId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(COIN_DETAILS + coinId);
    const json = await response.json();
    console.log(json);
    setCoinData(json);
  };

  const { description, image, market_cap_rank } = coinData;

  return (
    <div>
      <div className="flex items-center ">
        <div className="w-4/12 px-8 flex flex-col items-center justify-center">
          <img src={image?.large} width={250} />
          <p className="pt-4 text-2xl text-center font-rubik font-medium">
            Rank: #{market_cap_rank}
          </p>
        </div>
        <div className="w-8/12 px-8 ">
          <p className="text-2xl font-poppins font-semibold">Description</p>
          <div className=" pt-8">
            <p
              className="text-xl font-rubik h-72 overflow-y-auto"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description?.en),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
