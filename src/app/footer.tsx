import Image from "next/image";
import Link from "next/link";



export default function Footer() {
    return (
        <footer>
            <div className="pt-[68px] pb-[90px] max-w-screen-xl mx-auto">
                <div className="flex items-start justify-between gap-5">
                    <div>
                        <Link href="/">
                            <Image src={"/icons/logo.svg"} width={111} height={30} alt="Site Logo" />
                        </Link>
                        <p className="text-secondary font-medium text-base mt-[25px] w-full max-w-[342px]">
                            Advice is your gateway to effortless, high-
                            quality video conferencing. Join us in shaping
                            the future of communication!
                        </p>
                    </div>
                    <div className="flex items-start gap-[100px]">
                        <div className="space-y-5">
                            <h4 className="text-primary text-xl font-bold">
                                Product
                            </h4>
                            <div className="flex flex-col gap-4">
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    Overview
                                </Link>
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    Solutions
                                </Link>
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    Tutorials
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <h4 className="text-primary text-xl font-bold">
                                Company
                            </h4>
                            <div className="flex flex-col gap-4">
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    About us
                                </Link>
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    Careers
                                </Link>
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <h4 className="text-primary text-xl font-bold">
                                Legal
                            </h4>
                            <div className="flex flex-col gap-4">
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    Terms
                                </Link>
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    Privacy
                                </Link>
                                <Link href={"/"} className="text-secondary text-base font-medium hover:underline hover:text-primary">
                                    Licenses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light100 py-[30px] w-full">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex items-center justify-between">
                        <p className="text-secondary text-base font-medium">
                            © 2023 Advice. All rights reserved.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link href={"/"}>
                                <Image src="/icons/linkedin.svg" width={30} height={30} alt="LinkedIn Icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src="/icons/twitter.svg" width={30} height={30} alt="Twitter Icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src="/icons/facebook.svg" width={30} height={30} alt="Facebook Icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src="/icons/instagram.svg" width={30} height={30} alt="Instagram Icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src="/icons/youtube.svg" width={30} height={30} alt="Youtube Icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}