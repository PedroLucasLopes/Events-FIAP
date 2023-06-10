import * as S from "./styles/styles";

const ActionCard = ({
  children,
  path,
  svg,
  backgroundColor,
  color,
  height,
  width,
}: {
  children: string;
  path: string;
  backgroundColor?: string;
  color?: string;
  height?: string;
  width?: string;
  svg: any;
}) => {
  return (
    <S.ActionCardContainer
      style={{
        backgroundColor: backgroundColor,
        color: color,
        height: height,
        width: width,
      }}
    >
      <S.LinkCard to={path}>{children}</S.LinkCard>
      {svg}
    </S.ActionCardContainer>
  );
};

export default ActionCard;
