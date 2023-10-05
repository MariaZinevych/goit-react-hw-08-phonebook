import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/tasks/selector';
import { deleteContacts } from 'redux/tasks/operations';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p> {name} </p>
          <p> {number} </p>
          <button
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
