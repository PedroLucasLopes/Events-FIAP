import React from "react";
import * as S from "./styles/styles";

const MainTitle = () => {
  const date = new Date();
  const hh = date.getHours();
  const [apresentation, setApresentation] = React.useState("");
  React.useEffect(() => {
    if (hh < 12) {
      setApresentation("Bom dia");
    } else if (hh < 18) {
      setApresentation("Boa tarde");
    } else if (hh >= 18) {
      setApresentation("Boa noite");
    }
  }, [hh]);
  return <S.MainTitle>{`${apresentation}`}</S.MainTitle>;
};

export default MainTitle;
