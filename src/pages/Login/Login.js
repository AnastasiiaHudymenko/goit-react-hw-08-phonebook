import { Formik } from 'formik';
import { LoginForm, Input, Button, Title } from './Login.styled';

export const LoginPage = () => {
  const handleSubmit = (value, action) => {
    console.log(value);
    action.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      <LoginForm>
        <Title>Please login</Title>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </LoginForm>
    </Formik>
  );
};
