import styled from "styled-components";

export const CardContainer = styled.div`
  width: 25rem;
  max-width: 425px;
  background-color: #8080801b;
  border-radius: 8px;
  display: flex;
  padding: 0.6rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  box-shadow: 0 4px 5px #8080803d;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: 2px 6px 5px #80808073;
  }

  @media screen and (max-width: 320px) {
    width: 18rem;
  }
`;

export const ImageBox = styled.div`
  background-image: url(${({ url }: { url: string }) => url});
  width: 5.5rem;
  height: 5.5rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

export const TextBox = styled.div`
  margin-left: 1rem;
  text-align: start;
  h1 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.2rem;
    height: 3.3rem;
    line-height: 1.2;
    overflow: hidden;
  }

  @media screen and (max-width: 320px) {
    margin-left: 0.7rem;
    font-size: 0.9rem;
    line-height: 1.2;
  }
`;
