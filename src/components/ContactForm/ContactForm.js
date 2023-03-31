import { Formik } from 'formik';
import { TfiPlus } from 'react-icons/tfi';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { FormStyled, Input, ButtonAdd } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(addContact(value));
    action.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name: '', number: '' }}>
      <FormStyled>
        <Input placeholder="Name Contact" name="name" />

        <Input placeholder="Phone number" name="number" />

        <ButtonAdd type="submit">
          <TfiPlus color="#fff" size={24} />
        </ButtonAdd>
      </FormStyled>
    </Formik>
  );
};

// FcPlus
//FcOk
//SlUserFollowing
