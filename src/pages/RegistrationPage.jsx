import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../redux/auth/operations.js";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm.jsx";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const onRegister = (formData) => {
    dispatch(apiRegisterUser(formData));
  };

  return (
    <>
      <RegistrationForm onRegister={onRegister} />
    </>
  );
};

export default RegistrationPage;
