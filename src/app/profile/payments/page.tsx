import { Input } from "@/components/ui/input";
import ProfileHeader from "../header";
import { ProfileInput } from "../input";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="bg-white  pb-[100px]  w-full  flex flex-col justify-center items-center">
      <ProfileHeader />
      <section className="p-[60px] pb-[82px] bg-white max-w-[722px] w-full mt-[112px] ml-[162px] rounded-2xl border-2 border-light200">
        <h2 className="text-[32px] font-jakarta font-bold text-black">
          Payout Method
        </h2>
        <p className="text-black text-base font-bold font-jakarta mt-5">
          All sales will incur a 20% Advice fee.
        </p>
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-4 mt-10">
          <Input
            type="email"
            placeholder="Stripe Email"
            className="col-span-full"
          />
          <Input type="text" placeholder="First Name" className="col-span-1" />
          <Input type="text" placeholder="Last Name" className="col-span-1" />
          <Input
            type="text"
            placeholder="Address"
            className="col-span-full"
          />
          <Input
            type="text"
            placeholder="City"
            className="col-span-1"
          />
          <Input
            type="text"
            placeholder="Postal Code"
            className="col-span-1"
          />
          <Input
            type="text"
            placeholder="Country"
            className="col-span-full"
          />
          <Input
            type="number"
            placeholder="Phone Number"
            className="col-span-full"
          />

        
        </div>
        <div className="flex justify-end mt-[25px]">
        <Button variant={"primary"} className="h-[52px] px-[50px] rounded-[15px]">
Update Setting
        </Button>
        </div>
      </section>
    </main>
  );
}
