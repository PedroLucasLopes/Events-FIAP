import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubCategoryTitle = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 1rem 1rem;
`;

export const SubtitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkBox = styled(Link)`
  font-size: 0.9rem;
  margin-right: 1rem;
  margin-top: 1.6rem;
  :hover {
    text-decoration: underline;
    border-bottom: 1px solid grey;
    opacity: 0.8;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 1rem;

    div {
      flex-direction: column;
      text-align: start;
      width: 11rem;
      height: 15rem;
      font-size: 1.1rem;
      line-height: 1;

      div {
        width: 8rem;
        margin: 0 auto;
        margin-bottom: 1rem;
      }
    }
  }
`;

export const ImageSlide = styled.img`
  width: 50vw;
  height: 25rem;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 2rem;
`;
