import { useSelector } from "react-redux";
import {
  selectPhonebookIsLoading,
  selectPhonebookIsError,
} from "../../redux/contacts/selectors.js";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectPhonebookIsLoading);
  const isError = useSelector(selectPhonebookIsError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.list}>
        {contacts &&
          contacts !== null &&
          contacts.map((contact) => (
            <li className={css.item} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
