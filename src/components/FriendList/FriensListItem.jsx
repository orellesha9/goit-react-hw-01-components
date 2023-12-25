import styles from "./friendlist.module.css"

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const result = isOnline ? styles.active: styles.nonactive
  return (
    <li className={styles.item}>
      <span className={result}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
