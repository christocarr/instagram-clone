import styled, { css } from 'styled-components';

export const WrapperDiv = styled.div`
  width: 90%;
  max-width: 768px;
  margin: 8em auto 0 auto;
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          color: hsl(100, 0%, 20%);
        `
      : css`
          color: hsl(100, 0%, 90%);
        `}
`;
