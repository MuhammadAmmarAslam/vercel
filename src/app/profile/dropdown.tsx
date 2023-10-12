
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  label: React.ReactNode;
  content: React.ReactNode;
  className:React.ReactNode
};
export function ProfileDropdown({ label, content,className }: Props) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger
        className={`h-[60px] w-full flex justify-between items-center px-[30px] text-base text-gray700 border-none placeholder:text-gray700 font-jakarta font-medium rounded-[15px] bg-light100 hover:border-none ${className}`}
      >
        {label}
        <Image src="/icons/arrow-left.svg" alt="" width={24} height={24} className="w-6 h-6 -rotate-90" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {content}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
