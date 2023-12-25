import { StatList } from './StatList';
import styles from "./statistics.module.css"

export const Statistics = ({ title, stats = [] }) => {
  const elements = stats.map(item => (
    <StatList
      key={item.id}
      label={item.label}
      percentage={item.percentage}
    />
  ));
  
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statlist}>{elements}</ul>
    </section>
  );
};
