import styled from 'styled-components';
import { Form, Field } from 'formik';
import bg from '../../image/subtle-prism.png';

export const Bg = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 16px;
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  margin: 0 auto;

  background: #ffffff;
  background: linear-gradient(to left, #ffffff, #27227c);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  color: rgb(39, 34, 124);
  font-style: italic;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: rgb(39, 34, 124);
    font-style: italic;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid rgb(39, 34, 124);
  color: rgb(39, 34, 124);
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgb(39, 34, 124);
    border: 1px solid rgb(39, 34, 124);
    color: #fff;
  }
`;
