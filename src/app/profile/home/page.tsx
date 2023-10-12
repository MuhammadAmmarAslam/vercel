import Image from "next/image";
import ProfileHeader from "../header";
import { CalendarProfile } from "../calendar";
import {
  ChevronDownIcon,
  ClockIcon,
  CounterClockwiseClockIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Clock10Icon } from "lucide-react";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center ">
      <ProfileHeader />
      <section className="bg-white  relative  h-full pb-[204px]">
        <div className="absolute top-[440px] -ml-[184px]">
          <CalendarProfile />
        </div>
        <div className="pl-[22%] pt-[61px]">
          <h2 className="font-montserrat text-[26px] font-bold text-black   ">
            My Earnings
          </h2>
          <div className="flex pt-[34px] items-end gap-[27px]">
            <div className="p-16 shadow-graph-item bg-white  rounded-2xl w-[518px]">
              <div className="flex items-end gap-[48px] bg-white ">
                <ul className="space-y-7 py-4">
                  <li className="text-[22px] font-manrope font-extrabold text-black100">
                    60
                  </li>
                  <li className="text-[22px] font-manrope font-extrabold text-black100">
                    40
                  </li>
                  <li className="text-[22px] font-manrope font-extrabold text-black100">
                    20
                  </li>
                  <li className="text-[22px] font-manrope font-extrabold text-black100">
                    00
                  </li>
                </ul>
                <div className="w-6 h-[120px] rounded-[120px] bg-darkgray flex flex-col justify-end"></div>
                <div className="w-6 h-[68px] rounded-[120px] bg-blue flex flex-col justify-end"></div>
                <div className="w-6 h-[180px] rounded-[120px] bg-purple flex flex-col justify-end"></div>
                <div className="w-6 h-[160px] rounded-[120px] bg-darkblack flex flex-col justify-end"></div>
                <div className="w-6 h-[76px] rounded-[120px] bg-blue flex flex-col justify-end"></div>
              </div>
            </div>
            <div className="  rounded-2xl bg-white  shadow-reveiw-box h-[369px] w-[463px] p-10 pt-0 relative">
              <h2 className="font-manrope text-[40px] text-black font-extrabold absolute -top-12 right-[76px]">
                4.5
              </h2>
              <div className="flex justify-between">
                <h2 className="font-manrope text-[40px] text-black font-extrabold -mt-[34px]">
                  Reviews
                </h2>
                <button className=" bg-purple text-white rounded-[200px] px-2 h-9 text-base font-bold -mt-[1px] ">
                  322+ <span className="ps-[2px]" /> reviews
                </button>
              </div>
              <Reveiws
              className=""
                heading="M"
                subheading="Maudie"
                description="Itaque dolor fuga natus eveniet."
              />
              <Reveiws
              className="bg-blue"
                heading="D"
                subheading="Davion"
                description="Laboriosam voluptatibus voluptatibus deserunt repellendus."
              />
            </div>
          </div>
          <div className="mt-[84px]">
            <h2 className="font-montserrat text-[26px] font-bold text-black  ">
              My schedule
            </h2>
            <h3 className="text-base text-black font-montserrat font-semibold mt-[45px]">
              February, 14-20
            </h3>
            <div className="mt-[88px] max-w-[800px] w-full ">
              <ul className="flex items-center justify-between gap-[68px]">
                <li className="text-base font-montserrat font-normal text-gray400">
                  Week
                </li>
                <li className="text-base text-center font-montserrat font-normal text-gray400">
                  14 <br /> Sun
                </li>
                <li className="text-base text-center font-montserrat font-normal text-gray400">
                  15 <br /> Mon
                </li>
                <li className="text-base text-center font-montserrat font-normal text-bluebold">
                  16 <br /> Tue
                </li>
                <li className="text-base text-center font-montserrat font-normal text-gray400">
                  17 <br /> Wed
                </li>
                <li className="text-base text-center font-montserrat font-normal text-gray400">
                  18 <br /> Thu
                </li>
                <li className="text-base text-center font-montserrat font-normal text-gray400">
                  19 <br /> Fri
                </li>
                <li className="text-base flex flex-col items-center text-center font-montserrat font-normal text-gray400">
                  20 <br /> Sat
                </li>
              </ul>
              <div className=" flex justify-end pt-2 px-1">
                <ChevronDownIcon className="text-gray400 " />
              </div>
              <div className="mt-7 relative">
                <Table time="09:00" />
                <SelectedTimeSlot
                  className="absolute top-0 left-[74px]"
                  heading="Операційні системи та безпека даних"
                  content="09:00 - 10:20"
                />
                <Table time="10:00" />
                <Table time="11:00" />
                <SelectedTimeSlot
                  className="absolute top-[18%] left-[35%]"
                  heading="Операційні системи та безпека даних"
                  content="10:30 - 11:50"
                />
                <Table time="12:00" />

                <div className="max-w-[188px] absolute top-[35%] left-[61%]  bg-green100 flex items-center h-[92px] justify-center rounded-lg w-full">
                  <div className="bg-gray600 rounded-r-md flex flex-col justify-between   ml-2 w-full h-full px-3 pb-[5px] pt-[9px] ">
                    <h2 className="text-green100 text-xs font-medium font-montserrat">
                      Проектування інтерфейсу користувача (UI)
                    </h2>
                    <p className="flex items-center text-green100 font-normal font-montserrat">
                      <Image
                        src="/images/clock.svg"
                        alt=""
                        className="text-green100"
                        width={12}
                        height={12}
                      />{" "}
                      <span className="pl-1 text-[10px] text-green100">12:30 - 13:50</span>
                    </p>
                  </div>
                </div>
                <Table time="13:00" />
                <Table time="14:00" />
                <Table time="15:00" />
                <Table time="16:00" />
                <Table time="17:00" />
                <Table time="18:00" />
              </div>
              <hr className="max-w-[726px] w-full text-gray500 ml-[73px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type SelectedTimeSlot = {
  heading: string;
  content: React.ReactNode;
  className: React.ReactNode;
};

function SelectedTimeSlot({ heading, content, className }: SelectedTimeSlot) {
  return (
    <>
      <div
        className={`max-w-[188px] bg-bluebold flex items-center h-[92px] justify-center rounded-lg w-full ${className}`}
      >
        <div className="bg-purplelight rounded-r-md flex flex-col justify-between   ml-2 w-full h-full px-3 pb-[5px] pt-[9px] ">
          <h2 className="text-bluebold text-xs font-medium font-montserrat">
            {heading}
          </h2>
          <p className="flex items-center text-bluebold font-normal font-montserrat">
            <Image src="/images/clock.svg" alt="" width={12} height={12} />{" "}
            <span className="pl-1 text-[10px]">{content}</span>
          </p>
        </div>
      </div>
    </>
  );
}

type TableProps = {
  time: React.ReactNode;
};

function Table({ time }: TableProps) {
  return (
    <>
      <div className="flex  gap-6  ">
        <div className="font-normal w-[53px] flex items-center justify-center text-center text-base font-montserrat text-gray400 my-[13px]">
          {time}
        </div>
        <hr className="max-w-[828px] w-full text-gray500" />
      </div>
    </>
  );
}

type ReveiwProps = {
  heading: string;
  subheading: string;
  description: string;
  className: React.ReactNode;
};

function Reveiws({ heading, subheading, description, className }: ReveiwProps) {
  return (
    <>
      <div
        className={`flex items-center border-2 bg-white border-gray200 rounded-xl p-4 gap-4 justify-between w-[383px] mt-6 `}
      >
        <div className="flex gap-2">
          <div
            className={`bg-purple flex items-center justify-center h-[80px] w-16 ${className}`}
          >
            <h4 className="text-2xl font-bold font-manrope text-white">
              {heading}
            </h4>
          </div>
          <div>
            <h3 className="text-2xl text-black">{subheading}</h3>
            <p className="text-base text-gray font-semibold font-manrope w-32">
              {description}
            </p>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/images/star.svg"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <Image
            src="/images/star.svg"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <Image
            src="/images/star.svg"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <Image
            src="/images/star.svg"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <Image
            src="/images/star.svg"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </div>
      </div>
    </>
  );
}
