import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.xm};
`;

export const User = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Button = styled.button`
  position: relative;
  width: 60px;
  height: 25px;
`;
