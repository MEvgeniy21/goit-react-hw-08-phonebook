import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TitleSecondary = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.xm};
`;
