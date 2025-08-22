import styles from "./Button.module.css";

type TButton = {
  children: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  isDisabled?: boolean;
  buttonClass?: string;
};

function Button({
  children,
  onClick,
  type = "button",
  isDisabled = false,
  buttonClass = "primary",
}: TButton) {
  return (
    <button
      className={`${styles.btn} ${styles[buttonClass]}`}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
