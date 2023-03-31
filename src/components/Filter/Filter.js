import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filter/slice';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };

  return (
    <div>
      <Input
        value={filter}
        onChange={handleChange}
        placeholder="Find your contact"
        name="filter"
        type="text"
      />
    </div>
  );
};
