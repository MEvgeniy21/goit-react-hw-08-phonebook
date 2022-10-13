import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  box-shadow: 0 4px 6px -6px ${p => p.theme.colors.black};
`;

export const Main = styled.main`
  margin-top: ${p => p.theme.space[6]}px;
`;
