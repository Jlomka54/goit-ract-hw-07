import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = (props) => {
  const { name, number, id } = props;
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem} key={id}>
      <div className={css.box}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
