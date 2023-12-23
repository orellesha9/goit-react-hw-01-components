import './statistics.css';
import { StatList } from './StatList';

export const Statistics = ({ title, stats = [] }) => {
  const elements = stats.map(item => (
    <StatList
      key={item.id}
      label={item.label}
      percentage={item.percentage}
    />
  ));
  
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{elements}</ul>
    </section>
  );
};
