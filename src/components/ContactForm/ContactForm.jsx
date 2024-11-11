import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { addContact } from '../../redux/contacts/operations';
import { contactsSchema } from '../../util/formHelper';
import CustomInput from '../CustomInput/CustomInput';
import { Button } from '@mui/material';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formValue, formActions) => {
    dispatch(addContact(formValue));
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <Form className={css.form}>
        <CustomInput
          name={'name'}
          label={'Name'}
          placeholder={'Harry Potter'}
        />
        <CustomInput
          name={'number'}
          label={'Number'}
          placeholder={'380xxxxxxxx'}
        />
        <Button type="submit" variant="outlined">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
