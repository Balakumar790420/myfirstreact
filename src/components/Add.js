import React from 'react'
import iphone from "../assets/iphone.png";
const Add = () => {
    return (
        <div className="">
            <div className="text-[30px] font-semibold flex items-end justify-center mt-3 pt-5">
                <h1 className="">Its time to upgrade your old smartphone</h1>
            </div>
            <div className="flex item-center md:w-max xl:w-[70vw]  mx-auto gap-5">
                {/* Fist Deal */}
                <div className="  relative  h-[35rem] flex items-end justify-center rounded-[1rem] md:w-[90vw]   overflow-hidden  mt-6 w-screen mx-4 md:mx-0  ">
                    <img
                        src={iphone}
                        alt=""
                        className="absolute object-cover w-full h-full  rounded-[1rem] "
                    />
                </div>
                <div className="grad absolute w-full  md:w-[70vw] h-[36.5rem]"><div className='mt-10 pl-8 text-[23px] font-semibold'>New Iphone 14pro</div><div className='mt-3 pl-8 text-[15px] hover:underline'><p className=" text-[#0071dc]">More info</p></div></div>
                <div className="  gap-4 pb-2 relative z-30">
                    <div className="flex items-center justify-between">

                        <div className="h-full pr-10 mt-10">
                            <p>Just</p>
                            <p className="font-bold text-[26px]">$999.99</p>
                            <div className="flex items-center justify-center">
                                <div className="bg-[#ffc220] w-[5.5rem] flex items-center justify-center h-[2.5rem] rounded-full">
                                    <p className="font-bold text-[13px]">BUY NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
