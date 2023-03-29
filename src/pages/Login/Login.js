import { LoginForm, Input, Button, Title } from './Login.styled';

export const LoginPage = () => {
  return (
    <LoginForm>
      <Title>Please login</Title>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </LoginForm>
  );
};
