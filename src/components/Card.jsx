import React from "react";
import etherumIcon from "../assets/images/icon-ethereum.svg";
import clockIcon from "../assets/images/icon-clock.svg";
import avatarImage from "../assets/images/image-avatar.png";
import eyeImage from "../assets/images/icon-view.svg";
const Card = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-[#14253d] max-w-[320px]  h-[32rem] p-6 rounded-xl">
        <div className="rounded-lg drop-shadow-md m-auto bg-contain bg-no-repeat bg-[url('assets/images/image-equilibrium.jpg')] bg-clip-content w-56 h-56 ">
          <div className=" w-full h-full flex justify-center items-center transition-all duration-700 hover:bg-cyan-500/40 rounded-lg opacity-0 hover:opacity-100">
            <img className="w-11 h-11" src={eyeImage} alt="" />
          </div>
        </div>

        <article>
          <h1 className="mt-6 text-[1.3rem] text-white font-[600] tracking-wide">
            Equilibrium{" "}
            <span className="hover:text-[#00fff7] cursor-pointer">#3429</span>
          </h1>
          <p className="mt-4 font-[300] tracking-wide leading-7 text-[#8bacda] font">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between mt-3 text-sm">
            <div className=" flex items-center justify-around w-24 ">
              <img src={etherumIcon} alt="" />
              <p className="text-[#00fff7] font-[600] tracking-wide">
                0.041 ETH
              </p>
            </div>
            <div className="flex items-center justify-around w-24">
              <img src={clockIcon} alt="" />
              <p className="text-[#8bacda]">3 days left</p>
            </div>
          </div>
        </article>
        <hr className="mt-3 border-[#2f415b]" />
        <div className="flex items-center justify-between mt-5 w-11/12 sm:w-12/12 md:w-11/12">
          <img
            className="w-8 rounded-full border border-white"
            src={avatarImage}
            alt=""
          />
          <p className="font-[300] text-[#8bacda]">
            Creation of{" "}
            <span className="text-white hover:text-[#00fff7] cursor-pointer">
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
