import styled from "styled-components";

export const MainContainer = styled.main`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin-bottom: 0.5rem;
    min-width: 300px;
    @media (min-width: 768px) {
      max-width: 40rem;
    }
  }

  button {
    width: 10rem;
    margin: 0 auto;
  }
`;

export const InfoContainer = styled.div`
  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.5rem;
  padding-top: 2rem;

  svg {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.6;
    transition: all 0.5s;
    @media (min-width: 1024px) {
      width: 2rem;
      height: 2rem;
    }
  }

  svg:hover {
    opacity: 1;
  }
`;
