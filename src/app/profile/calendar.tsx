"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CalendarProfile() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg  bg-white text-darkgray  border-gray100 w-[380px] h-[390px]  shadow-calendar-box gap-[6px] space-y-[6px]   flex items-center justify-center"
      classNames={{
        day:"w-[45px] h-[45px] rounded-[5px] text-[11px] font-montserrat",
        caption_label: "text-base font-montserrat font-bold text-black",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-[31px] w-[12px]  text-bluebold  p-0 bg-transparent border-none h-0 hover:text-bluebold hover:border-none hover:bg-transparent"
        ),
        day_selected: "!bg-bluebold text-white w-[45px] h-[45px]  text-[11px]  font-montserrat hover:text-white ",
        day_disabled: "text-[11px] w-[45px] h-[45px] font-montserrat font-semibold text-black",
        table: "w-[360px] space-x-4",
        head_cell: "w-full text-base font-semibold text-gray300 ",
        cell: "w-full ",
      }}
      components={{
        
      }}
    />
  );
}
