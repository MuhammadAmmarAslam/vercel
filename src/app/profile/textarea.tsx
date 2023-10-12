import { Textarea } from "@/components/ui/textarea"



type Props = {
    placeholder: string;
    className: string;
  };
  
  export function TextareaProfile({ placeholder, className }: Props) {
    return (
      <>
        <Textarea
          className={` bg-light100 text-gray250  text-base font-medium w-full rounded-[15px] p-[30px] hover:bg-light100 hover:border-none border hover:border-light100 resize-none  border-light100 ${className}`}
          placeholder={placeholder}
          rows={8}
        />
      </>
    );
  }