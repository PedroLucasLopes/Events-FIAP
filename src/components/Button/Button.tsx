import { ButtonTypes } from "./types";
import * as S from "./styles/styles";

const ButtonForm = ({
  children,
  color = "blue",
  size,
  variant,
  type,
  onClick,
  isDisabled,
}: ButtonTypes) => {
  return (
    <S.Btn
      type={type}
      colorScheme={color}
      size={size}
      variant={variant}
      onClick={() => onClick()}
      disabled={isDisabled && isDisabled ? true : false}
    >
      {children}
    </S.Btn>
  );
};

export default ButtonForm;
