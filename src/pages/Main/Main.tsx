import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import ActionCard from "../../components/ActionCard/ActionCard";
import control from "../../assets/capa-joystick.png";
import control2 from "../../assets/example.png";
import Event from "../../assets/Event.tsx";
import Talk from "../../assets/Talk.tsx";
import * as S from "./styles/styles.tsx";
import CourseCard from "../../components/CourseCard/CourseCard.tsx";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HStack } from "@chakra-ui/react";

const Main = () => {
  const slides = [control, control2];
  const events = [
    {
      children: "Oficina de jogos",
      description: "Oficina de jogos pertinho de você",
      src: control,
    },
    {
      children: "Oficina de programação",
      description: "Oficina de desenvolvimento pertinho de você",
      src: control2,
    },
  ];

  function onClick() {
    localStorage.removeItem("login");
  }

  return (
    <S.MainContainer>
      <HStack justify="space-between">
        <MainTitle />
        {localStorage.getItem("login") ? (
          <Link to={"/login"} onClick={onClick}>
            Sair
          </Link>
        ) : (
          <HStack>
            <Link to="/login">Logar</Link>
            <Link to="/signup">Cadastrar</Link>
          </HStack>
        )}
      </HStack>
      <Swiper className="mySwiper">
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <S.ImageSlide src={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <S.ActionBox>
        <ActionCard
          children="Criar Evento"
          path="create-event"
          svg={<Event />}
        />
        <ActionCard children="Criar Talk" path="create-talk" svg={<Talk />} />
      </S.ActionBox>
      <S.SubtitleBox>
        <S.SubCategoryTitle>Perto de você</S.SubCategoryTitle>
        <S.LinkBox to="courses">Ver mais</S.LinkBox>
      </S.SubtitleBox>
      <S.CardContainer>
        {events.map(({ children, description, src }, i) => {
          return (
            <Link to={`event/${i}`} key={i}>
              <CourseCard
                children={children}
                src={src}
                description={description}
              />
            </Link>
          );
        })}
      </S.CardContainer>
    </S.MainContainer>
  );
};

export default Main;
