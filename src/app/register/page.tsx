'use client'
import { Button } from "@/components/ui/button";
import { Input, PhoneInput } from "@/components/ui/input";
import Link from "next/link";
import React from 'react'
import Footer from "../footer";
import ConfirmationPopup from "../../components/confirmation-popup";
import Image from "next/image";



export default function Page() {
    const [curStep, setCurStep] = React.useState<"FIRST" | "SECOND">("FIRST")
    return (
        <>
            <main className="max-w-screen-xl mx-auto">
                <div className="flex items-start gap-20 pt-[200px] pb-[282px]">
                    <div className="w-[400px] h-[500px] rounded-2xl bg-light100 border-2 border-light200 relative px-5 py-4">
                        <Button variant="primary" className="absolute bottom-4 left-5 h-9 px-6 rounded-[18px]">
                            Top Expert
                        </Button>
                    </div>
                    <div className="">
                        <button type="button" className="flex items-center gap-3 h-[30px] font-bold text-2xl text-black leading-[100%]">
                            <Image src="/icons/arrow-left.svg"
                                width={24} height={24}
                                alt="Left Arrow Icon" />
                            <span className="block">Back</span>
                        </button>
                        {
                            curStep === "FIRST" ?
                                <div className="w-full max-w-[752px]">
                                    <h3 className="text-black font-semibold text-[32px] leading-normal mt-[40px]">
                                        Create an Account or Login
                                    </h3>
                                    <p className="text-secondary text-base font-semibold mt-5">
                                        Start by entering your mobile number. We&apos;ll send you a 4-digit to verify <br />
                                        that you are a real person :
                                    </p>
                                    <PhoneInput
                                        className="mt-10 max-w-[550px]"
                                        placeholder="Enter mobile number..."
                                        onChangeDone={() => setCurStep("SECOND")} />
                                    <p className="text-secondary text-base font-medium mt-5">
                                        By continuing you agree to our {" "}
                                        <Link href={"/"} className="font-bold text-lightblue underline">Terms</Link>
                                        {" "}and{" "}
                                        <Link href={"/"} className="font-bold text-lightblue underline">Privacy Policy</Link>
                                    </p>
                                    <div className="w-full h-[2px] bg-gray100 mt-[30px]" />
                                    <div className="mt-[30px]">
                                        <h4 className="text-black text-xl font-bold leading-[24px]">
                                            Why a mobile number?
                                        </h4>
                                        <p className="text-secondary text-base font-semibold mt-4">
                                            It&apos;s less complicated than remembering an email and password, and to <br />
                                            verify that you&apos;re a real person
                                        </p>
                                    </div>
                                </div>
                                :
                                <div className="w-full max-w-[550px]">
                                    <h3 className="text-black font-semibold text-[32px] leading-normal mt-[40px]">
                                        Create an Account or Login
                                    </h3>
                                    <p className="text-secondary text-base font-semibold mt-5">
                                        Please enter the information below to complete your profile :
                                    </p>
                                    <div className="grid grid-cols-2 gap-x-[10px] gap-y-4 mt-[64px]">
                                        <Input type="email" placeholder="Enter email address" className="col-span-full" />
                                        <Input type="text" placeholder="First Name" className="col-span-1" />
                                        <Input type="text" placeholder="Last Name" className="col-span-1" />
                                        <Input type="text" placeholder="Current Job Title" className="col-span-1" />
                                        <Input type="text" placeholder="Current Company" className="col-span-1" />
                                        <Input type="url" placeholder="LinkedIn Url" className="col-span-full" />
                                        <div className="col-span-full flex justify-end items-center">
                                            <ConfirmationPopup />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

