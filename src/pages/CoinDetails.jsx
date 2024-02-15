import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { COIN_DETAILS } from "../utilities/constants";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

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
      <div className="my-12">
        <h1 className="text-center mb-6 font-poppins font-semibold text-2xl">
          Resources
        </h1>
        <div className="flex justify-evenly mx-20 gap-1 font-rubik text-lg text-blue-500">
          <a
            href={coinData?.links?.homepage[0]}
            className="flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <IoGlobeOutline size={20} />
            Official website
          </a>
          <a
            href={coinData?.links?.whitepaper}
            className="flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <FaRegNoteSticky size={20} /> Whitepaper
          </a>
          <a
            href={coinData?.links?.repos_url?.github[0]}
            className="flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
