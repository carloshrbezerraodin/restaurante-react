import styled from "styled-components";

interface IContainerProps {
  isopen: string;
}

export const Container = styled.header<IContainerProps>`
  background-color: ${props => props.theme.colors.primary};
  max-width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  .itemMobile {
    display: none; 
  }

  nav {
    max-height: 100%;
    
    .container__lista {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      &__item {
        list-style-type: none;
        width: 232px;
        text-align: center;
        align-items: center;
        font-size: 20px;
        color: ${props => props.theme.colors.textColorContrast};
        cursor: pointer;
      }
    }
  }

  .menuBurguerMobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    height: 60px;

    .container__lista {
      &__item {
        font-size: 18px;
        width: auto;
      }
    }
  }

  @media screen and (max-width: 425px) {
    justify-content: space-between;
    position: absolute;
    width: 100%;

    .itemMobile {
      display: block;
      font-weight: 500;
      color: #fff;
    }

    nav {
      display: ${props => props.isopen};
      width: 100%;

      .container__lista {
        flex-direction: column;
        position: relative;
        background-color: ${props => props.theme.colors.background};
        z-index: 1000;
        top: 50px;
        right: -120px;

        &__item {
          padding: 10px 0;
          color: ${props => props.theme.colors.textColorPrimary};
          border: 1px solid ${props => props.theme.colors.primary};
          height: 100%;
        }
      }
    }

    .menuBurguerMobile {
      display: block;
    }
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 150px;
  text-align: center;
  background: linear-gradient(0.25turn, #36231C 100%, #36231C 0%, #36231C 100%);

  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: 120px;
  }

  @media screen and (max-width: 425px) {
    background-color: purple;

    img {
      height: 100%;
    }
  }
`;
