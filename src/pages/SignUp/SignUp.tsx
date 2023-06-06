import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import InputForm from "../../components/Input/Input";
import ButtonForm from "../../components/Button/Button";
import * as S from "./styles/styles";
import ModalForm from "../../components/Modal/Modal";
import { defaultData } from "./defaultData";
import { useNavigate } from "react-router-dom";

interface IsignUp {
  username: string;
  surname: string;
  email: string;
  birthDate: string;
  tri: string;
  zipcode: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [birthDate, setBirthDate] = React.useState<string>("");
  const [tri, setTri] = React.useState<string>("");
  const [zipCode, setZipcode] = React.useState<string>("");
  const [signUp, setSignUp] = React.useState<IsignUp>(defaultData);

  const onHandleSubmit = () => {
    setSignUp({
      username: username,
      surname: surname,
      email: email,
      birthDate: birthDate,
      tri: tri,
      zipcode: zipCode,
    });

    localStorage.setItem("login", "logado");
    navigate("/");
  };

  return (
    <S.MainContainer>
      <PageTitle children="Inscreva-se" />
      <S.Form>
        <InputForm
          type="text"
          placeholder="Nome"
          size="lg"
          onChange={(e) => {
            setUsername(e.currentTarget.value);
          }}
        />
        <InputForm
          type="text"
          placeholder="Sobrenome"
          size="lg"
          onChange={(e) => {
            setSurname(e.currentTarget.value);
          }}
        />
        <InputForm
          type="email"
          placeholder="E-mail"
          size="lg"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <S.FormDivision>
          <InputForm
            type="datetime-local"
            placeholder="Data de Nascimento"
            size="lg"
            onChange={(e) => {
              setBirthDate(e.currentTarget.value);
            }}
          />
          <InputForm
            type="text"
            placeholder="CPF"
            size="lg"
            onChange={(e) => {
              setTri(e.currentTarget.value);
            }}
          />
        </S.FormDivision>
        <InputForm
          type="text"
          placeholder="CEP"
          size="lg"
          onChange={(e) => {
            setZipcode(e.currentTarget.value);
          }}
        />
        <ButtonForm
          children="Continuar"
          type="button"
          color="blue"
          size="lg"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </S.Form>
      <ModalForm
        title="Antes de prosseguir com sua inscrição leia atentamente:"
        description="Fazemos o uso de dados pessoais e localização, para maior precisão nas buscas e para segurança de nossos usuários."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={onHandleSubmit}
      />
    </S.MainContainer>
  );
};

export default SignUp;
