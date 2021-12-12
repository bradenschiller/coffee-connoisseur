import styles from "../../styles/Button.module.css";
// add size here

const Button = ({ title, primary, ...rest }) => {
  return (
    <button
      className={primary ? styles.primaryButton : styles.secondaryButton}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
