import styled from "styled-components";

export const ContainerSearch = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64rem;
  height: 2.75rem;
  border: 1px solid #8A94A4;
  border-radius: 8px;
  outline: none;

  .searchBar {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 16px;
  }

  .iconSearch {
    margin: 10px 12px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 40px;
  gap: 24px;

  .containerItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    padding: 16px 20px;
    gap: 16px;
  }

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
  }
`;

export const ContainerLoader = styled.div`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.colors.primary} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FlexContainerItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 425px) {
    gap: 0.5rem;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 425px) {
    gap: 0.5rem;
  }
`;

export const MenuImage = styled.img`
  border-radius: 100%;
  width: 8em;
  height: 8em;

  &:active {
    border: 2px solid ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 425px) {
    width: 6em;
    height: 6em;
  }
`;

export const MenuImageText = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.colors.contrast};

  &:active {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;
