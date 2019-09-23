import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 32px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border: 3px solid #eee;
      border-radius: 50%;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
