import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import InputForm from "../../components/Input/Input";
import ButtonForm from "../../components/Button/Button";
import * as S from "./styles/styles";
import ModalForm from "../../components/Modal/Modal";

const SignUp = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <S.MainContainer>
      <PageTitle children="Inscreva-se" />
      <S.Form>
        <InputForm type="text" placeholder="Nome" size="lg" />
        <InputForm type="text" placeholder="Sobrenome" size="lg" />
        <InputForm type="email" placeholder="E-mail" size="lg" />
        <S.FormDivision>
          <InputForm
            type="datetime-local"
            placeholder="Data de Nascimento"
            size="lg"
          />
          <InputForm type="text" placeholder="CPF" size="lg" />
        </S.FormDivision>
        <InputForm type="text" placeholder="CEP" size="lg" />
        <ButtonForm
          children="Continuar"
          type="button"
          color="blue"
          size="lg"
          onClick={() => setIsOpen(true)}
        />
      </S.Form>
      <ModalForm
        title="Antes de prosseguir com sua inscrição leia atentamente:"
        description="Fazemos o uso de dados pessoais e localização, para maior precisão nas buscas e para segurança de nossos usuários."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </S.MainContainer>
  );
};

export default SignUp;
