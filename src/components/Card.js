import React from "react";
import {AiOutlinePlus} from "react-icons/ai";

const Card = ({ photo, title, price }) => {
  return (
    
    <div className="flex flex-col items-center justify-center ">
      <img src={photo} alt="" className="w-52 h-56 rounded-[1rem]" />
      <div className="flex justify-between w-[13rem] items-center justify-center">
        <p className="font-bold text-[13px]">
          {title}
        </p>
        <p className="font-bold">{price}</p>
      </div>
      <div className="flex justify-between w-[8rem] justify-center">
        
<button type="button" class="text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-black-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5 mb-2 flex mt-5"><AiOutlinePlus className="text-[18px] font-semibold"/>Add</button>
        </div>
    </div>

  );
};

export default Card;
