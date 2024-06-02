import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.error}>
      <p>Sorry, an error occurred! Please reload the page...</p>
    </div>
  );
};

export default ErrorMessage;
