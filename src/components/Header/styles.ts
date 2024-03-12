import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  Justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};
      /* cria a borda e deixa transparente e no hover, modifica para a cor verde */
      
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
// propriedade active fornecida pelo usa do navLink
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`