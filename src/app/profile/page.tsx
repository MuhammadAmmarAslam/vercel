import { CameraIcon, CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TextareaProfile } from "./textarea";
import { ProfileDropdown } from "./dropdown";
import { Input } from "@/components/ui/input";
import ProfileHeader from "./header";

export default function Page() {
  return (
    <main className="bg-white  pb-[100px]   w-full  flex flex-col justify-center items-center">
      <ProfileHeader />
      <section className="p-[60px] pb-[38px]  bg-white max-w-[722px] w-full mt-[118px]  ml-[248px] rounded-2xl border-2 border-light200">
        <h2 className="text-[32px] font-bold text-black font-jakarta">
          Experts Profile
        </h2>
        <div className="flex gap-5 mt-10">
          <div className="bg-light100 p-[30px] rounded-3xl ">
            <div className="flex flex-col items-center justify-center text-center gap-1 h-[160px] w-[140px]">
              <Image
                src="/images/camera.svg"
                alt=""
                width={40}
                height={40}
                className="w-10 h-auto aspect-square"
              />
              <p className="text-gray700 font-jakarta text-base font-medium ">
                Click to change photo
              </p>
            </div>
          </div>
          <div className="w-full">
            <p className="text-black font-jakarta font-bold">
              Social Media Platform
            </p>
            <Input className="mt-6" type="url" placeholder="LinkedIn Url" />
            <Input className="mt-4" type="url" placeholder="www.yourweb.com" />
          </div>
        </div>
        <div className="mt-[30px]">
          <Input className="" type="text" placeholder="Full Name" />
          <div className="flex gap-2 mt-4">
            <Input
              className=""
              type="email"
              placeholder="Enter email address"
            />
            <ProfileDropdown className=""  label="Location" content="" />
          </div>
        </div>
        <TextareaProfile className="mt-4" placeholder="Summary" />
        <div className="mt-[118px] flex justify-end">
          <Button variant={"primary"} className="h-[52px] px-[30px]">
            Update Profile
          </Button>
        </div>
      </section>
    </main>
  );
}
