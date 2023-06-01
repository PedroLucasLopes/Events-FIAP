import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkCard = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;

  @media screen and (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

export const ActionCardContainer = styled.div`
  width: 100%;
  margin: 0 1rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #7070702c;
  border-radius: 8px;
  box-shadow: 0 3px 8px #00000027;
  transition: all 0.3s ease-out;
  cursor: pointer;

  :hover {
    box-shadow: 3px 3px 8px #00000043;
  }

  svg {
    width: 7rem;
    margin: 0 auto;
    margin-top: 0.2rem;

    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 320px) {
    margin: 0 0.3rem;
  }
`;
