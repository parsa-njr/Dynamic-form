import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

// Define the props interface
interface CustomInputProps {
  type: "text" | "textarea" | "dropdown" | "checkbox";
  defaultValue?: string;
  className?: string;
  label: string;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  onChange: (value: any) => void; // Adjust the type as needed
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  defaultValue,
  className = "",
  label,
  options = [],
  placeholder = "",
  onChange,
}) => {
  return (
    <>
      {type === "text" && (
        <div className="line mb-3 flex items-center">
          <Label className="text-[14px] text-[#6c757d] w-1/4">{label}</Label>
          <Input
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={`form-control ${className}`}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )}
      {type === "textarea" && (
        <div className="line mb-3 flex items-center">
          <Label className="text-[14px] text-[#6c757d] w-1/4">{label}</Label>
          <Textarea
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={`form-control ${className}`}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )}
      {type === "dropdown" && (
        <div className="line mb-3 flex items-center">
          <Label className="text-[14px] text-[#6c757d] w-1/4">{label}</Label>
          <Select onValueChange={onChange} defaultValue={defaultValue}>
            <SelectTrigger className={`form-control-select ${className}`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {options.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      {type === "checkbox" && (
        <div
          style={{ direction: "rtl" }}
          className="line mb-3 flex items-center"
        >
          <Checkbox onCheckedChange={onChange} className="mx-2" />
          <Label className="text-[14px] text-[#6c757d] ">{label}</Label>
        </div>
      )}
    </>
  );
};

export default CustomInput;
