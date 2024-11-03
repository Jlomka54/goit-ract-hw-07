import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

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
