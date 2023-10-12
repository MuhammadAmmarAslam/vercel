import { Input } from "@/components/ui/input"
import React from "react"



type Props = {
    placeholder: string;
    type: string;
    className: string;
  };
  
  export function ProfileInput({ placeholder, type, className }: Props) {
    return (
      <>
        <Input
          className={`h-[60px] w-full px-[30px] text-base text-gray700 border-none placeholder:text-gray700 font-jakarta font-medium rounded-[15px] bg-light100 hover:border-none ${className}`}
          type={type}
          placeholder={placeholder}
        />
      </>
    );
  }