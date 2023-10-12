import Image from "next/image";
import ProfileHeader from "../header";

export default function Page() {
  return (
    <main className="bg-white  pb-[150px]  flex flex-col justify-center items-center  w-full">
      <ProfileHeader />
      <section className="px-[60px] pt-[39px] pb-[75px] bg-white max-w-[722px] w-full mt-[118px] ml-[248px] rounded-2xl border-2 border-light200">
        <div>
          <ReviewsProfile />
        </div>
        <div className="mt-[18px]">
          <ReviewsProfile />
        </div>
        <div className="mt-[62px]"> 
          <ReviewsProfile />
        </div>
      </section>
    </main>
  );
}

function ReviewsProfile() {
  return (
    <>
      <div className="flex justify-end">
        <div className="bg-purple w-[117px] h-[127px] rounded-3xl"></div>
      </div>
      <div className="bg-darkblack p-6 h-[206px] max-w-[512px] w-full relative rounded-lg  -mt-[52px] ml-16">
        <Image
          src="/images/reviewrs-profile.png"
          className="w-[160px] h-[250px] absolute  bottom-0"
          alt=""
          width={160}
          height={250}
        />
        <div className="ml-[195px] py-2 flex flex-col gap-4">
          <Star />
          <p className="text-white font-medium text-sm font-manrope leading-[128%] max-w-[254px] w-full">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <h3 className="text-xs font-bold leading-[100%] text-lightgreen">
            Elisa Grant
          </h3>
          <p className="mt-1 text-[8px] font-manrope font-normal text-lightgreen">
            Legacy Solutions Engineer
          </p>
        </div>
      </div>
      <div className="flex justify-start -mt-[55px]">
        <div className="bg-lightgreen w-[270px] h-[127px] rounded-3xl"></div>
      </div>
    </>
  );
}

function Star() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        <Image
          src="/images/white-star.svg"
          width={14}
          height={14}
          alt=""
          className="text-white w-[14px] h-auto aspect-square"
        />
        <Image
          src="/images/white-star.svg"
          width={14}
          height={14}
          alt=""
          className="text-white w-[14px] h-auto aspect-square"
        />
        <Image
          src="/images/white-star.svg"
          width={14}
          height={14}
          alt=""
          className="text-white w-[14px] h-auto aspect-square"
        />
        <Image
          src="/images/white-star.svg"
          width={14}
          height={14}
          alt=""
          className="text-white w-[14px] h-auto aspect-square"
        />
        <Image
          src="/images/white-star.svg"
          width={14}
          height={14}
          alt=""
          className="text-white w-[14px] h-auto aspect-square"
        />
      </div>
      <p className="text-[10px] font-manrope font-normal text-lightgreen">
        5.0 rating
      </p>
    </div>
  );
}
