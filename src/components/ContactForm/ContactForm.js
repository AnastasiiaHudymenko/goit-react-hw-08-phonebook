import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import toast from 'react-hot-toast';
import { TfiPlus } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import {
  FormStyled,
  Input,
  ButtonAdd,
  Errormsg,
  ErrormsgLeft,
} from './ContactForm.styled';

let userSchema = object({
  name: string().required(),
  number: string().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  const handleSubmit = (value, actions) => {
    console.log(value);
    const findContactName = items.find(
      ({ name }) => name.toLowerCase() === value.name.toLowerCase()
    );
    if (findContactName) {
      actions.resetForm();
      console.log('AHhgs');
      return toast.error(`${findContactName.name} already in your contacts!`, {
        iconTheme: {
          primary: 'red',
        },
      });
    }
    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={userSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: '', number: '' }}
    >
      <FormStyled>
        <Input placeholder="Name Contact" name="name" />
        <ErrorMessage name="name">
          {msg => <Errormsg>{msg}</Errormsg>}
        </ErrorMessage>
        <Input placeholder="Phone number" name="number" />
        <ErrorMessage name="number">
          {msg => <ErrormsgLeft>{msg}</ErrormsgLeft>}
        </ErrorMessage>
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
