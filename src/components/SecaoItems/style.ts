import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;

  .titulo {
    font-size: 24px;
    color: ${props => props.theme.colors.contrast};
    font-weight: 500;
    text-align: left;
  }

  .containerItens {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  @media screen and (max-width: 768px) {
    .titulo {
      font-size: 20px;
      text-align: center;
    }

    .containerItens {
      gap: 40px;
    }
  }

  @media screen and (max-width: 425px) {
    .titulo {
      font-size: 18px;
      text-align: center;
      width: 100%;
    }

    .containerItens {
      gap: 20px;
    }
  }
`;
