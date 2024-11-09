import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useState } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {' '}
      {/* add Grid */}
      {contacts.map(contact => {
        // console.log(contact); {id, name,number}

        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
