import { Input } from "@chakra-ui/react";
import { InputTypes } from "./types";

const InputForm = ({
  type,
  placeholder,
  size,
  variant,
  onChange,
}: InputTypes) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      size={size}
      variant={variant}
      onChange={onChange}
    />
  );
};

export default InputForm;
