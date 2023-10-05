import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/tasks/filterSlice';
import { getFilter } from 'redux/tasks/selector';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(setFilter(normalizedValue));
  };

  return (
    <>
      <label>
        Find contact by name
        <input type="text" name={filter} value={filter} onChange={onChange} />
      </label>
    </>
  );
};
