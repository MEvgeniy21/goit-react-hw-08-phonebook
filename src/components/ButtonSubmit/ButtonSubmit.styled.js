import styled from '@emotion/styled';

export const Button = styled.button`
  position: ${p => p.position};
  width: ${p => p.width}px;
  height: ${p => p.height}px;

  &:disabled {
    cursor: auto;
  }
`;
