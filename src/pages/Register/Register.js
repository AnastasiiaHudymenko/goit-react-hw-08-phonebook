import { FormContainer, Input, Button, Title } from './Register.styled';

export const RegisterPage = () => {
  return (
    <FormContainer>
      <Title>Please register</Title>
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Register</Button>
    </FormContainer>
  );
};
