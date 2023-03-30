import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(addContact(value));
    action.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name: '', number: '' }}>
      <Form>
        <Field placeholder="Name Contact" name="name" />
        <Field placeholder="Phone number" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
