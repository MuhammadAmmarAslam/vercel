import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileSwitch } from "../switch";
import Image from "next/image";
import ProfileHeader from "../header";

export default function Page() {
  return (
    <main className="bg-white  pb-[150px]   w-full  flex flex-col justify-center items-center">
      <ProfileHeader />
      <section className="p-[60px] pb-[50px] bg-white max-w-[722px] w-full mt-[112px] ml-[248px] rounded-2xl h-screen border-2 border-light200">
        <p className="text-black text-base font-bold font-jakarta">
          *Add Schedule Sessions
        </p>
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-4 mt-[30px]">
          <Input
            type="text"
            placeholder="Schedule Name"
            className="col-span-full"
          />
          <Input
            type="text"
            placeholder="How much price $?"
            className="col-span-full"
          />
          <Input type="text" placeholder="Date" className="col-span-1" />
          <Input type="text" placeholder="Time" className="col-span-1" />
        </div>
        <div className="flex justify-end mt-10">
          <Button
            variant={"primary"}
            className="h-[52px] px-[53px] rounded-[50px]"
          >
            Add Schedule
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-[30px] mt-[30px]">
          <div className="col-span-full flex relative justify-between items-center">
            <ProfileSwitch
              className=""
              label="Wellness Sport (Open Session)"
            />
            <p className="text-base font-medium text-black text-end">
              ✏️ Edit Schedule
            </p>
          </div>
          <div className="col-span-full grid grid-cols-2  gap-2 relative">
            <Input
              type="date"
              placeholder="12/24/2024"
              className="col-span-1"
            />
            <Input
              type="time"
              placeholder="9:00 AM  -  9:15 AM"
              className="col-span-1"
            />
            <Image
              src="/images/trash.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 absolute -right-10 top-[35%]"
            />
          </div>
          <hr className="col-span-full border-gray100" />
          <div className="col-span-full flex justify-between items-center relative">
            <ProfileSwitch
              className=""
              label="Wellness Sport (Closed Session)"
            />
            <p className="text-base font-medium text-black text-end">
              ✏️ Edit Schedule
            </p>
          </div>
          <div className="col-span-full grid grid-cols-2  gap-2 relative">
            <Input
              type="date"
              placeholder="12/24/2024"
              className="col-span-1"
            />
            <Input
              type="time"
              placeholder="9:00 AM  -  9:15 AM "
              className="col-span-1"
            />
            <Image
              src="/images/trash.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 absolute -right-10 top-[35%]"
            />
          </div>
        </div>
        <div className="flex justify-end mt-[79px]">
          <Button
            variant={"primary"}
            className="rounded-[50px] h-[52px] px-[40px] "
          >
            Update Schedule
          </Button>
        </div>
      </section>
    </main>
  );
}
