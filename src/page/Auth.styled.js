import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBlock = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const BtnSubmit = styled.button`
  width: 100px;
`;
