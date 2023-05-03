import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact} from 'redux/contactsSlice';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';


function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const deleteContacts = id => dispatch(deleteContact(id));

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filterList = filterContacts();
  return (
<ul>
    {filterList.map(({ id, name, number }) => {
      return (
        <li className={css.item} key={id}>
   <Contact name={name} number={number} id={id} onDeleteContact={() => deleteContacts(id)} />
   </li>
      );
    })}
  </ul>
    );
  }
      
   



ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactList;
