import './friendlist.css';
import { FriendListItem } from './FriensListItem';

export const FriendList = ({ friends }) => {
  const elements = friends.map(item => (
    <FriendListItem
      key={item.id}
      avatar={item.avatar}
      name={item.name}
      isOnline={item.isOnline}
    />
  ));

  return <ul className="friend-list">{elements}</ul>;
};
