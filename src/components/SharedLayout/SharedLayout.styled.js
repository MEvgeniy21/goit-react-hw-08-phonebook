import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  box-shadow: 0 4px 6px -6px ${p => p.theme.colors.black};
`;

export const Container = styled.div`
  margin-top: ${p => p.theme.space[6]}px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
`;

export const Link = styled(NavLink)`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.xm};

  &.active {
    color: ${p => p.theme.colors.red};
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
