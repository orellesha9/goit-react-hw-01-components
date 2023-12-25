import styles from "./statistics.module.css"

export const StatList = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
};
