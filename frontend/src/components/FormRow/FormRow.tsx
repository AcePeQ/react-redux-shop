import styles from "./FormRow.module.css";

type TFormRowProps = {
  label: string;
  id: string;
  type?: string;
  error?: string;
  defaultValue?: string;
};

function FormRow({
  label,
  id,
  type = "text",
  error,
  defaultValue,
}: TFormRowProps) {
  return (
    <p className={styles.row}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.number}
        type={type}
        id={id}
        name={id}
        defaultValue={defaultValue}
      />
      {error && <p className={styles.error}>{error}</p>}
    </p>
  );
}

export default FormRow;
