import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  cursor: pointer;

  .containerInfos {
    min-height: 85px;
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .titulo {
    color: ${props => props.theme.colors.textColorPrimary};
    font-size: 16px;
    font-weight: 500;
  }

  .descricao {
    color: ${props => props.theme.colors.textColorSecondary};
    font-weight: 300;
    font-size: 16px;
  }

  .imagem {
    width: 25%;
    height: 100px;
    border-radius: 8px;
  }

  @media screen and (max-width: 768px) {
    height: 100px;
    
    .titulo,
    .descricao {
      font-size: 14px;
    }

    .imagem {
      width: 30%;
      height: 80px;
    }
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: auto;
    padding: 1rem;

    .containerInfos {
      width: 100%;
      gap: 8px;
    }

    .titulo,
    .descricao {
      font-size: 14px;
    }

    .imagem {
      width: 50%;
      height: 80px;
    }
  }
`;
