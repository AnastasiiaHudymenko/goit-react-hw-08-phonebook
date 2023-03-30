import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  FormContainer,
  Input,
  Button,
  Title,
  Container,
  Bg,
} from './Register.styled';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
  };

  return (
    <Bg>
      <Container>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
        >
          <FormContainer>
            <Title>register please</Title>
            <Input name="name" type="text" placeholder="Username" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Button type="submit">Register</Button>
          </FormContainer>
        </Formik>
      </Container>
    </Bg>
  );
};
