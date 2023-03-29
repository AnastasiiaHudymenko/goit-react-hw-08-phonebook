import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginTitle, Title, ContactTitle } from './Home.styled';
import phoneBook from '../../image/phoneBook.jpg';
import contactImg from '../../image/contacts.jpg';
import loginImg from '../../image/login.jpg';

export const HomePage = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={phoneBook} alt="First slide" />
        <Carousel.Caption>
          <Title>Welcome to PhoneBook</Title>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={loginImg} alt="Second slide" />

        <Carousel.Caption>
          <LoginTitle>Login to your account</LoginTitle>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={contactImg} alt="Third slide" />

        <Carousel.Caption>
          <ContactTitle>Add your contacts</ContactTitle>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // <Container>
    //   <Title>Welcome to your PhoneBook application </Title>
    // </Container>
  );
};
