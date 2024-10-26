import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 71px;
  margin: 1rem 0;

  .containerInfos {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .precoItem {
      font-weight: 500;
      font-size: 16px;
      color: ${props => props.theme.colors.textColorPrimary};
    }

    &__item {
      gap: 10px;

      .nomeItem {
        font-weight: 400;
        font-size: 16px;
        color: ${props => props.theme.colors.textColorPrimary};
        line-height: 18.75px;

        .descricaoItem {
          font-size: 16px;
          font-weight: 400;
          color: ${props => props.theme.colors.textColorSecondary};
          line-height: 18.75px;
        }
      }
    }
  }

  .containerQtd {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 94px;
    gap: 4px;

    div {
      width: 20px;
      height: 20px;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.textColorContrast};
      border-radius: 50%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    input {
      border: none;
      color: ${props => props.theme.colors.textColorPrimary};
      font-weight: 700;
      width: 30px;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;

    .containerInfos {
      flex-direction: column;

      .precoItem {
        font-size: 14px;
      }

      &__item {
        .nomeItem {
          font-size: 14px;
        }

        .descricaoItem {
          font-size: 14px;
        }
      }
    }

    .containerQtd {
      width: 80%; 
    }
  }

  @media screen and (max-width: 425px) {
    .containerInfos {
      .precoItem {
        font-size: 12px; 
      }

      &__item {
        .nomeItem {
          font-size: 12px; 
        }

        .descricaoItem {
          font-size: 12px; 
        }
      }
    }

    .containerQtd {
      gap: 2px; 
      
      div {
        width: 18px;
        height: 18px; 
      }

      input {
        width: 28px;
        font-size: 18px;
      }
    }
  }
`;
