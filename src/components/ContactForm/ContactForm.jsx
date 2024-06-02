import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { apiAddUserContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required!"),
  number: Yup.string()
    .matches(
      /^(\+?[0-9]{1,3})?[-. (]?([0-9]{1,4})?[). -]?([0-9]{1,4})?[. -]?([0-9]{1,9})$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
});

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    dispatch(apiAddUserContact(data));
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputContainer}>
          <label>Name</label>
          <Field type="text" className={css.input} name="name"></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputContainer}>
          <label>Number</label>
          <Field type="tel" className={css.input} name="number"></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
