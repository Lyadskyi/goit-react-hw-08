import styles from "./Contact.module.css";
import { MdPerson } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { apiDeleteUserContact } from "../../../redux/contacts/operations";

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(apiDeleteUserContact(data.id));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textbox}>
          <MdPerson size="24" className={styles.icon} />
          <p className={styles.text}>{data.name}</p>
        </div>
        <div className={styles.textbox}>
          <MdPhone size="24" className={styles.icon} />
          <p className={styles.text}>{data.number}</p>
        </div>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
