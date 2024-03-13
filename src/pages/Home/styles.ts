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
// base que será a mesma para os 2 inputs
// inherit herda a caracteristica do pai

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

// flex 1 ocupa o máximo espaço que der
export const TaskInput = styled(BaseInput)`
  flex: 1

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

//webkit remove a seta do input

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

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

export const StartCountdownButton = styled.button`
  border: 0;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
