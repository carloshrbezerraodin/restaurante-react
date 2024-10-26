import styled from "styled-components";

export const ContainerMensagem = styled.div`
  margin: 64px 0;

  .mensagem{
    color: ${props => props.theme.colors.textColorSecondary};
    font-size: 16px;
  }
`