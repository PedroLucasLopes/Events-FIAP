import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import ActionCard from "../../components/ActionCard/ActionCard";
// import Slider from "../../components/Slider/Slider";
import control from "../../assets/capa-joystick.png";
import control2 from "../../assets/example.png";
import Event from "../../assets/Event.tsx";
import Talk from "../../assets/Talk.tsx";
import * as S from "./styles/styles.tsx";
import CourseCard from "../../components/CourseCard/CourseCard.tsx";
import { Link } from "react-router-dom";

const Main = () => {
  // const sliderImage = [control, control2];
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
  return (
    <S.MainContainer>
      <MainTitle user={"Pedro"} />
      {/* <Slider slider={sliderImage} /> */}
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
