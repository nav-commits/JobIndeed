// components/CustomTextField.types.ts
import { ReactNode } from "react";
import { SxProps } from "@mui/system";
import { InputProps as MuiInputProps } from "@mui/material/Input";

export interface CustomTextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: ReactNode;
  InputProps?: Partial<MuiInputProps>;
  sx?: SxProps;
}
