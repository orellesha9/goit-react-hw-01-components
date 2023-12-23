import styles from "./transactionHistory.module.css"
import { TransactionHistoryRows } from './TransactionHistoryRows';

export const TransactionHistory = ({ items }) => {
  const elements = items.map(item => (
    <TransactionHistoryRows
      key={item.id}
      type={item.type}
      amount={item.amount}
      currency={item.currency}
    />
  ));
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.table.th}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};
