import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/filters/slice';
import { selectContactsFilter } from '../../redux/filters/selectors';
import { Label, Input } from './Filter.module';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <Label>
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};