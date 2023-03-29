import { Formik } from 'formik';
import { FormContainer, Input, Button, Title } from './Register.styled';

export const RegisterPage = () => {
  const handleSubmit = (value, action) => {
    action.resetForm();
    console.log(value);
    console.log(action);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
    >
      <FormContainer>
        <Title>Please register</Title>
        <Input name="name" type="text" placeholder="Username" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Register</Button>
      </FormContainer>
    </Formik>
  );
};
