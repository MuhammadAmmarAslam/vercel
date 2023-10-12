import { Button } from "@/components/ui/button";
import ProfileHeader from "../header";
import { PlusCircle, PlusCircleIcon } from "lucide-react";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { TextareaProfile } from "../textarea";
import { ProfileDropdown } from "../dropdown";

export default function Page() {
  return (
    <main className="bg-white min-h-screen pb-[150px]  flex flex-col justify-center items-center  w-full">
      <ProfileHeader />
      <section className="p-[60px]   pb-[50px] bg-white max-w-[722px] w-full mt-[118px] ml-[248px] rounded-2xl border-2 border-light200">
        <h2 className="text-[32px] text-black font-bold font-jakarta">
          My Resume
        </h2>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-base font-jakarta text-black font-bold">
            *Work Experience
          </p>
          <Button
            variant={"primary"}
            className="px-[30px] h-[56px] rounded-[50px] flex gap-[6px] justify-between text-white font-jakarta font-bold"
          >
            <Image
              src="/images/plus-circle.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Additional Experience
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-4 mt-4">
          <Input
            type="email"
            placeholder="Job Title"
            className="col-span-full"
          />
          <Input type="text" placeholder="First Name" className="col-span-1" />
          <Input type="text" placeholder="Last Name" className="col-span-1" />
          <Input type="text" placeholder="Company" className="col-span-full" />
          <Input type="text" placeholder="Date" className="col-span-1" />
          <ProfileDropdown className="col-span-1"  label="Location" content="" />
          <TextareaProfile
            className="col-span-full"
            placeholder="Description"
          />
        </div>
        <div className="mt-[52px] flex justify-between items-center">
          <p className="text-base font-jakarta text-black font-bold">
            *Education
          </p>
          <Button
            variant={"primary"}
            className="px-[30px] h-[56px] rounded-[50px] flex gap-[6px] justify-between text-white font-jakarta font-bold"
          >
            <Image
              src="/images/plus-circle.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Additional Education
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-4 mt-3">
          <Input type="text" placeholder="Name" className="col-span-full" />
          <Input
            type="text"
            placeholder="Institute"
            className="col-span-full"
          />
          <Input type="text" placeholder="Date" className="col-span-1" />
          <ProfileDropdown className="col-span-1"  label="Location" content="" />
        </div>
        <div className="flex justify-end mt-[150px]">
          <Button variant={"primary"} className="h-[52px] px-[30px] rounded-[50px]">
          Update Setting
          </Button>
        </div>
      </section>
    </main>
  );
}
