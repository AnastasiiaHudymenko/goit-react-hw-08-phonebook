import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 30px;
  background: #ffffff;
  background: linear-gradient(to left, #ffffff, #27227c);
  border-radius: 4px;
`;

export const Input = styled(Field)`
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding-left: 20px;
  ::placeholder {
    color: rgb(39, 34, 124);
    font-style: italic;
  }
`;

export const ButtonAdd = styled.button`
  background-color: rgb(39, 34, 124);
  border: 1px solid rgb(39, 34, 124);
  border-radius: 100%;
  padding: 7px;
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
`;
