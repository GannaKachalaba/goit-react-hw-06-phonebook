import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Message from 'components/Message/Message';
import Header from 'components/Header/Header';
import css from 'components/App.module.css';


function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <div className={css.container}>
        <Header />
      </div>
      <div className={css.container}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        {contacts.length !== 0 ? (
          <ContactList />
        ) : (
          <Message text="Contact list is empty." />
        )}
      </div>
    </>
  );
}

export default App;
