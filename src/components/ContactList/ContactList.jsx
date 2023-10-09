import { useSelector } from 'react-redux';
import css from './ContactList.module.css'
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.data.contacts);
  const filter = useSelector(state => state.sorting.filter);

  const filteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };  
  const dispatch = useDispatch();
  
  return (
    <ul>
      {filteredContacts().length > 0 && (
        filteredContacts().map(({ id, name, number }) => (
          <li className={css.contact} key={nanoid()}>
            {name}: {number}
            <button className={css.delete} onClick={() => {
              dispatch(delContact({ id }));
              }}>
              Delite
            </button>
          </li>
        ))
      )}
    </ul >
  );
};
export default ContactList;

