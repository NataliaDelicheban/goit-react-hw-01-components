import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return <section className={css.section}>
    <ul className={css.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => {
            return (
                <li className={css.item} key={id}>
                    <span className={css.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}>{' '}</span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>);
       })}
        </ul>
        </section>
}

FriendList.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}