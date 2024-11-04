import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contacts/contactsSlice";

const getVisibleContacts = (contacts, filterForSearch) => {
  if (!filterForSearch) {
    return contacts;
  }
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterForSearch.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterForSearch = useSelector((state) => state.filter.filter);
  const visibleContact = getVisibleContacts(contacts, filterForSearch);

  return (
    <ul className={css.contactList}>
      {visibleContact.map((contact) => (
        <Contact
          id={contact.id}
          name={contact.name}
          number={contact.number}
          key={contact.id}
          className={css.contactItem}
        />
      ))}
    </ul>
  );
};

export default ContactList;
