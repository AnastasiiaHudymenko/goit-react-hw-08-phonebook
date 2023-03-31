import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { CgProfile } from 'react-icons/cg';
import { AiFillDelete } from 'react-icons/ai';
import {
  List,
  Item,
  Container,
  Title,
  WrapContent,
  BtnDelete,
  Span,
} from './ContactList.styled';

export const ContactList = () => {
  const { items } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const findNameByFilter = () => {
    const findName = items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    if (findName.length === 0) {
      return items;
    }
    return findName;
  };

  const titleWelcom = !items.length ? (
    <Title>You don't have contacts yet</Title>
  ) : (
    <Title>Your contacts</Title>
  );
  return (
    <Container>
      {titleWelcom}
      <List>
        {findNameByFilter().map(({ id, name, number }) => (
          <Item key={id}>
            <WrapContent>
              <Span>
                <CgProfile size={24} color="rgb(39, 34, 124)" />
              </Span>
              <Span>{name}</Span>: <Span>{number}</Span>
            </WrapContent>

            <BtnDelete
              onClick={() => dispatch(deleteContact(id))}
              aria-label="button delete contact"
            >
              <AiFillDelete size={24} color="#651a1ac9" />
            </BtnDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};
