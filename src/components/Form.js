import styled, { css } from 'styled-components';
import { Form } from '@rocketseat/unform';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input {
    margin-bottom: 16px;
  }

  /* Unform error label styles */
  span {
    align-self: flex-start;
    margin-top: -8px;
    margin-bottom: 16px;
    color: #f64c75;
  }

  ${props =>
    props.inline &&
    css`
      flex-direction: row;
      align-items: center;
      margin: 0;

      input {
        margin-right: 16px;
        margin-bottom: 0;
      }
    `};
`;

export default StyledForm;
