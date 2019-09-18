import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

const StyledInput = styled(Input)`
  height: 40px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fff;

  &:focus {
    border-color: #3b9eff;
  }
`;

export default StyledInput;
