import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

export const Form = styled.form`
  margin: 0 1rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 0.6rem;
    max-width: 35rem;

    @media (min-width: 768px) {
      margin-bottom: 1.2rem;
    }
  }
`;

export const FormDivision = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    input {
      width: 17rem;
    }
  }
`;
