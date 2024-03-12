import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  align-items: center;
  color: ${props => props.theme['gray-100']};
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;  
  
  span {
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem 1rem;
}  
`

export const Separator = styled.div `
  color: ${props => props.theme['green-500']};
  padding: 2rem 0;

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
