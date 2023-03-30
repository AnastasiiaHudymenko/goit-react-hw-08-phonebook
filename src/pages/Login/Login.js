import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { LoginForm, Input, Button, Title } from './Login.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(logIn(value));
    action.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      <LoginForm>
        <Title>login please</Title>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </LoginForm>
    </Formik>
  );
};
