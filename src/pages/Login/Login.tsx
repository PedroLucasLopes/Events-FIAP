import React from "react";
import InputForm from "../../components/Input/Input";
import ButtonForm from "../../components/Button/Button";
import Lottie from "../../components/LottieFiles/Lottie";

import { MdFacebook } from "react-icons/md";
import { AiOutlineGoogle, AiFillApple } from "react-icons/ai";
import * as S from "./styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const handleOnClick = () => {
    if (
      localStorage.getItem("user") ===
      `username: ${email}, password: ${password}`
    ) {
      setLoading(true);
      localStorage.setItem("login", "logado");
      navigate("/");
      setLoading(false);
    }
  };

  if (localStorage.getItem("login")) navigate("/");
  else {
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
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              size={window.innerWidth <= 768 ? "md" : "lg"}
            />
            <InputForm
              type={"password"}
              placeholder="Senha"
              variant="filled"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              size={window.innerWidth <= 768 ? "md" : "lg"}
            />
            <ButtonForm
              color="blue"
              size={window.innerWidth <= 768 ? "md" : "lg"}
              variant="solid"
              type="button"
              onClick={handleOnClick}
            >
              Entrar
            </ButtonForm>
          </S.FormContainer>
          <S.IconContainer>
            <MdFacebook />
            <AiOutlineGoogle />
            <AiFillApple />
          </S.IconContainer>
          <HStack justify="center">
            <Text mt="3rem" fontSize="1.2rem" color="#131313">
              Ou{" "}
              <Link to="/signup" style={{ fontWeight: "bold" }}>
                Cadastre-se
              </Link>
            </Text>
          </HStack>
        </S.InfoContainer>
      </S.MainContainer>
    );
  }
};

export default Login;
