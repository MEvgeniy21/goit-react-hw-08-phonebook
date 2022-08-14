import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBlock = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.space[2]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;
