import styles from "./Button.module.css";

export const PrimaryButton = ({ children, className = "" }) => {
  return (
    <button className={`${styles.primaryButton} ${className}`}>
      {children}
    </button>
  );
};
