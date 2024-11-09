import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contacts/operations';
import { Button } from '@mui/material';
import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.data}>
        <p>
          <FaUser className={css.myIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.myIcon} />
          {number}
        </p>
      </div>
      <Button
        type="button"
        variant="outlined"
        // className={css.btn_delete}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Del
      </Button>
    </>
  );
};

export default Contact;
