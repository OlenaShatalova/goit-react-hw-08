import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectContactsList,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/contactsOps';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import SortBar from '../SortBar/SortBar';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList); // sends actions to the Redux store
  const loading = useSelector(selectLoading); // retrieves specific parts of the Redux state
  const error = useSelector(selectError); // retrieves specific parts of the Redux state

  useEffect(() => {
    dispatch(fetchContacts()); // a Redux operation function that triggers contact data retrieval
  }, [dispatch]);

  return (
    <div className={css.form_container}>
      <h1 className={css.main_title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <SortBar />
      {loading && <Loader>Loading contacts...</Loader>}
      {error && <Error>{error}</Error>}
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};

export default App;
