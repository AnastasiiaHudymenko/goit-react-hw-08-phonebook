import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Bg, Container } from './Contacts.styled';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Bg>
      <Container>
        <ContactForm />
      </Container>
    </Bg>
  );
};
