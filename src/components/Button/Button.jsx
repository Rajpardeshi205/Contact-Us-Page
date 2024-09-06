import Styles from "./Button.module.css";

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? Styles.outline_btn : Styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
