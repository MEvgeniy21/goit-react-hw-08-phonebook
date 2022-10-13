import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[5]}px;
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
