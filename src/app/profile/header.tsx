"use client"


import Image from "next/image";
import {  ChevronDownIcon} from "@radix-ui/react-icons";
import { MenuIcon } from "lucide-react";
import { Navigation } from "./navbar";

export default function ProfileHeader() {
  return (
    <header className="w-full flex flex-col xl:items-center   expert-header-section h-[390px] px-[80px] pt-10 ">
      <div className="">
        <h2 className="text-right font-jakarta text-white text-2xl font-bold ">
          🌤 Good Morning
        </h2>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center gap-1">
            <Image
              src="/images/expert-advice.png"
              alt=""
              width={50}
              height={50}
              className="w-[50px] h-auto aspect-square"
            />
            <h2 className="text-[36px] font-bold font-montserrat text-white leading-normal">
              Advice.
            </h2>
          </div>
          <div className="bg-light100 items-center gap-10 border rounded-[50px] pl-3 py-3 pr-6  flex justify-between">
            <div className="flex gap-4 items-center">
              <Image
                src="/images/elipse.svg"
                alt=""
                width={40}
                height={40}
                className="w-[40px] h-auto aspect-square"
              />
              <p className="text-base text-primary font-bold font-jakarta">
                Hi, Tony
              </p>
            </div>
            <ChevronDownIcon className="text-primary w-6 h-6" />
          </div>
        </div>
        <div className="flex xl:items-start justify-between  xl:mt-[110px]  mt-10  gap-10 ">
          <div className="flex flex-col items-center z-50  min-w-[350px] max-w-[350px]   h-[500px] border-2 border-light200  rounded-2xl bg-white">
            <div className="bg-light300 w-[149px] flex justify-center items-center rounded-full h-auto aspect-square mt-[73px]">
              <div className="bg-gray100 w-[109px] h-auto aspect-square  rounded-full "></div>
            </div>
            <h2 className="mt-5 text-[36px] text-black font-jakarta font-bold">
              Hi,Tony
            </h2>
            <div className="w-full h-1 bg-light100 max-w-[180px] rounded-full mt-[19px]">
              <div className="bg-primary w-[90%] h-full rounded-full  rounded-r-none "></div>
            </div>
            <p className="text-base font-jakarta text-black mt-2">
              Your profile is <span className="text-lightblue">80%</span>{" "}
              completed
            </p>
          </div>
          <div className="z-50 hidden xl:block">
            <Navigation/>
          </div>
          <MenuIcon className="text-white  xl:hidden" />
        </div>
      </div>
    </header>
  );
}






