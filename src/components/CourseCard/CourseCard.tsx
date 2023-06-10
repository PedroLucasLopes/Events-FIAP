import * as S from "./styles/styles";

const CourseCard = ({
  children,
  src,
  description,
}: {
  children: string;
  src: string;
  description: string;
}) => {
  return (
    <S.CardContainer>
      <S.ImageBox url={src}></S.ImageBox>
      <S.TextBox>
        <h1>{children}</h1>
        <p>{description}</p>
      </S.TextBox>
    </S.CardContainer>
  );
};

export default CourseCard;
