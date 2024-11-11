import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { Button } from '@mui/material';

import css from './Contact.module.css';

const Contact = ({ contact, openModal }) => {
  return (
    <>
      <div className={css.data}>
        <p>
          <FaUser className={css.myIcon} />
          {contact.name}
        </p>
        <p>
          <FaPhoneAlt className={css.myIcon} />
          {contact.number}
        </p>
      </div>
      <div className={css.buttons}>
        <Button
          type="button"
          variant="contained"
          size="small"
          style={{ backgroundColor: 'rgb(158, 202, 248)' }}
          sx={{ display: 'block', marginBottom: 2 }}
          onClick={() => openModal(contact, 'edit')}
        >
          Edit
        </Button>
        <Button
          type="button"
          variant="contained"
          size="small"
          style={{ backgroundColor: 'rgb(255, 154, 154)' }}
          sx={{ display: 'block' }}
          onClick={() => openModal(contact, 'delete')}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default Contact;
