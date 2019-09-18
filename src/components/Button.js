import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #3b9eff;
  color: #fff;
  font-weight: bold;
  user-select: none;

  &:hover,
  &:focus {
    background-color: ${darken(0.025, '#3b9eff')};
  }

  &:active {
    background-color: ${darken(0.05, '#3b9eff')};
  }
`;

export default Button;
