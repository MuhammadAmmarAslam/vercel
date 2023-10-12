'use client';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'


export default function ConfirmationPopup() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true);

    return (
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button onClick={handleOpen} variant={"primary"} className="px-[30px] h-[52px] rounded-[15px]">
                    Finish Setup
                </Button>
            </DialogTrigger>
            <DialogContent showCloseIcon={false} className="w-full max-w-[1069px] p-0 border-none rounded-[50px]">
                <div className={cn(
                    "pl-[80px] pr-[100px] pt-[60px] pb-[80px]",
                    "flex flex-col gap-[22px]"
                )}>
                    <div className="flex items-start justify-between">
                        <div className="max-w-[350px]">
                            <Image src={"/icons/logo.svg"} width={111} height={30} alt="Site Logo" />
                            <h3 className="text-black text-[32px] font-bold leading-[40px] mt-[80px]">
                                Great Tony, <br />
                                everything is ready  🎉
                            </h3>
                            <p className="mt-[30px] text-secondary font-semibold text-base">
                                You will receive a confirmation email soon <br />
                                for your next steps.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/confirmation-popup.png"
                                width={300}
                                height={304}
                                alt="Confirmation Image" />
                        </div>
                    </div>
                    <div className="flex gap-x-[69px]">
                        <div className="space-y-[40px] min-w-max pb-5">
                            <div className="flex items-start gap-[13px]">
                                <div className="h-[45px] aspect-square rounded-full bg-gray100" />
                                <div className="space-y-1">
                                    <p className="text-gray250 text-xs font-semibold">
                                        Qualification
                                    </p>
                                    <h5 className="text-black text-base font-bold">
                                        Experts approval
                                    </h5>
                                </div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <div className="h-[45px] aspect-square rounded-full bg-gray100" />
                                <div className="space-y-1">
                                    <p className="text-gray250 text-xs font-semibold">
                                        Meeting
                                    </p>
                                    <h5 className="text-black text-base font-bold">
                                        Interview with the owner
                                    </h5>
                                </div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <div className="h-[45px] aspect-square rounded-full bg-gray100" />
                                <div className="space-y-1">
                                    <p className="text-gray250 text-xs font-semibold">
                                        Setup Profile
                                    </p>
                                    <h5 className="text-black text-base font-bold">
                                        Completed experts profile
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-[40px] min-w-max">
                            <div className="flex items-start gap-[13px]">
                                <div className="h-[45px] aspect-square rounded-full bg-gray100" />
                                <div className="space-y-1">
                                    <p className="text-gray250 text-xs font-semibold">
                                        Time Management
                                    </p>
                                    <h5 className="text-black text-base font-bold">
                                        Schedule your sessions
                                    </h5>
                                </div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <div className="h-[45px] aspect-square rounded-full bg-gray100" />
                                <div className="space-y-1">
                                    <p className="text-gray250 text-xs font-semibold">
                                        Fee
                                    </p>
                                    <h5 className="text-black text-base font-bold">
                                        Accepting Payment
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-end row-span-full min-w-[200px] ml-auto">
                            <Button variant="primary" asChild className="h-[52px] px-10">
                                <Link href="/">
                                    Back to Home
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}
