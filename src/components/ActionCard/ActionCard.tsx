import React from "react";
import * as S from "./styles/styles";

const ActionCard = ({
  children,
  path,
  svg,
}: {
  children: string;
  path: string;
  svg: any;
}) => {
  return (
    <S.ActionCardContainer>
      <S.LinkCard to={path}>{children}</S.LinkCard>
      {svg}
    </S.ActionCardContainer>
  );
};

export default ActionCard;
