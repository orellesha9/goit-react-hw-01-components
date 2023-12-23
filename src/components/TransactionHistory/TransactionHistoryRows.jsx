import './transactionHistory.module.css';
import styles from "./transactionHistory.module.css"

export const TransactionHistoryRows = ({ type,amount, currency}) => {
    return (
        <tr>
        <td className={styles.table.td}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  };