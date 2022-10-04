import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  border-color: ${p => (p.isError ? p.theme.colors.red : 'none')};
`;
