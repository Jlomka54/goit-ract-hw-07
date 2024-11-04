import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const INITAL_VALUE = {
    name: "",
    number: "",
  };
  const handleSubmit = (value, action) => {
    dispatch(
      addContact({
        name: value.name,
        number: value.number,
      })
    );

    action.resetForm();
  };

  const addProfileSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at leaast 2 characters")
      .max(50, "Name must be less than 50 characters"),
    number: Yup.string()
      .required("Phone is required")
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be XXX-XX-XX"),
  });

  return (
    <Formik
      initialValues={INITAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={addProfileSchema}
    >
      <Form className={css.form}>
        <span>Name:</span>
        <Field className={css.input} type="text" name="name"></Field>
        <ErrorMessage className={css.errorMess} name="name" component="span" />
        <span>Number:</span>
        <Field className={css.input} type="text" name="number"></Field>
        <ErrorMessage
          className={css.errorMess}
          name="number"
          component="span"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
