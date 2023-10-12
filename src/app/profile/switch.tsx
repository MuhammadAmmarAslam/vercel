import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"


type SwitchProps = {
  label: string;
  className:React.ReactNode
};

export function ProfileSwitch({ label,  className }: SwitchProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Switch
        id="airplane-mode"
        className="data-[state=checked]:bg-green h-[31px] w-[51px] data-[state=unchecked]:bg-graywhite/30"
      />
      <Label htmlFor="airplane-mode" className="text-base font-bold text-black ">
        {label}
      </Label>
    </div>
  );
}
