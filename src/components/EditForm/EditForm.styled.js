import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBlock = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.space[2]}px;
`;

export const Label = styled.label`
  width: 65px;
  flex-shrink: 0;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};

  & svg {
    width: 25px;
    height: 25px;
  }
`;
