import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;
