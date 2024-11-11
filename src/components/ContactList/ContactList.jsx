import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import Contact from '../Contact/Contact';
import Modal from '../Modal/Modal';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState('');
  const [currentContact, setCurrentContact] = useState(null);

  const openModal = (contact, action) => {
    setIsModalOpen(true);
    setActionType(action);
    setCurrentContact(contact);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} openModal={openModal} />
            </li>
          );
        })}
      </ul>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          action={actionType}
          contact={currentContact}
        />
      )}
    </>
  );
};

export default ContactList;
