import * as React from "react"

import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Button } from "./button"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[60px] w-full rounded-[15px] bg-light100 px-[30px] py-1 text-base font-medium text-dark transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-gray250 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


type PhoneInputValue = {
  code: string;
  phone: string;
}

type PhoneInputProps = {
  value?: PhoneInputValue;
  onChange?: (value: PhoneInputValue) => void;
  onChangeDone?: () => void;
  placeholder?: string;
  className?: string;
}
const PhoneInput = ({ value, onChangeDone, placeholder, className }: PhoneInputProps) => {
  return (
    <div className={cn(
      "h-[60px] w-full rounded-[32px] bg-light100 p-2 pl-[30px]",
      "flex items-center gap-4",
      className
    )}>
      <Select value="+62" >
        <SelectTrigger icon={<ChevronDownIcon />} className={cn(
          "w-fit px-0 gap-2 border-none shadow-none h-5",
          "text-base font-medium leading-normal focus:ring-0 text-dark"
        )}>
          <SelectValue placeholder="Code" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="+62">+62</SelectItem>
            <SelectItem value="+2">+2</SelectItem>
            <SelectItem value="+3">+3</SelectItem>
            <SelectItem value="+4">+4</SelectItem>
            <SelectItem value="+5">+5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <span className="w-[2px] h-6 bg-gray400" />
      <input
        type={"number"}
        className={cn(
          "flex h-5 w-full flex-1 focus:outline-none bg-transparent",
        )}
        placeholder={placeholder}
      />
      <Button
        variant="primary"
        type="button"
        onClick={onChangeDone}
        className="h-11 px-10"
      >
        Continue
      </Button>
    </div>
  )
}
PhoneInput.displayName = "PhoneInput"

export { Input, PhoneInput }
