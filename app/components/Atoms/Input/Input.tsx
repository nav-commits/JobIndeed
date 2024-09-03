import { TextField } from "@mui/material";
import { CustomTextFieldProps } from "./Input.types";

const Input = ({ value, onChange, placeholder, icon, ...props } : CustomTextFieldProps) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth
      InputProps={{
        startAdornment: icon,
        ...props.InputProps,
      }}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        flex: 1,
        ...props.sx,
      }}
    />
  );
};

export default Input;
