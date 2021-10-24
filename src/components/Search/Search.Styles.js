import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 90%;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: hsl(100, 0%, 100%);
        `
      : css`
          background-color: hsl(100, 0%, 60%);
          color: hsl(100, 0%, 100%);
          &::placeholder {
            color: hsl(100, 0%, 100%);
          }
        `}
`;
