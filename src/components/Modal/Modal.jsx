import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import { Form, Formik } from 'formik';
import { contactsSchema } from '../../util/formHelper';
import CustomInput from '../CustomInput/CustomInput';
import { Button } from '@mui/material';
import { IoTrashBinOutline } from 'react-icons/io5';
import { CiEdit } from 'react-icons/ci';

import css from './Modal.module.css';

const Modal = ({ onClose, action, contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    onClose();
  };

  const handleEdit = (formValue, formActions) => {
    dispatch(editContact({ id, ...formValue }));
    formActions.resetForm();
    onClose();
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={onBackdropClick} className={css.backdrop}>
      <div className={css.modal}>
        {action === 'delete' && (
          <>
            <IoTrashBinOutline className={css.trashIcon} size={100} />
            <p className={css.text}>
              Are you sure you want to delete the contact?
              <span className={css.span}>{name}</span>
              <span className={css.span}>{number}</span>
            </p>
            <Button
              type="button"
              variant="contained"
              color="error"
              sx={{ display: 'block', mx: 'auto', mb: 2 }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </>
        )}

        {action === 'edit' && (
          <>
            <CiEdit className={css.trashIcon} size={100} />

            <Formik
              initialValues={{ name, number }}
              onSubmit={handleEdit}
              validationSchema={contactsSchema}
            >
              <Form className={css.form}>
                <CustomInput name={'name'} label={'Name'} defaultValue={name} />
                <CustomInput name={'number'} label={'Number'} />
                <Button type="submit" variant="contained">
                  Edit contact
                </Button>
              </Form>
            </Formik>
          </>
        )}

        <Button
          className={css.btn}
          type="button"
          variant="outlined"
          size="small"
          onClick={() => onClose()}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Modal;
