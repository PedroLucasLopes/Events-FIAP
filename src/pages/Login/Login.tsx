import React from "react";
import InputForm from "../../components/Input/Input";
import ButtonForm from "../../components/Button/Button";
import Lottie from "../../components/LottieFiles/Lottie";

import { MdFacebook } from "react-icons/md";
import { AiOutlineGoogle, AiFillApple } from "react-icons/ai";
import * as S from "./styles/styles";

const Login = () => {
  return (
    <S.MainContainer>
      <Lottie
        src="https://assets9.lottiefiles.com/packages/lf20_LXPzBMc84P.json"
        marginBottom="3rem"
        maxWidth="800px"
      />
      <S.InfoContainer>
        <S.FormContainer>
          <InputForm
            type={"email"}
            placeholder="E-mail"
            variant="filled"
            size={window.innerWidth <= 768 ? "md" : "lg"}
          />
          <InputForm
            type={"password"}
            placeholder="Senha"
            variant="filled"
            size={window.innerWidth <= 768 ? "md" : "lg"}
          />
          <ButtonForm
            color="blue"
            size={window.innerWidth <= 768 ? "md" : "lg"}
            variant="solid"
            type="button"
          >
            Entrar
          </ButtonForm>
        </S.FormContainer>
        <S.IconContainer>
          <MdFacebook />
          <AiOutlineGoogle />
          <AiFillApple />
        </S.IconContainer>
      </S.InfoContainer>
    </S.MainContainer>
  );
};

export default Login;
