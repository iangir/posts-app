import { Link } from 'react-router-dom';
import type { User } from '../model/types/user';
import cls from './UserCard.module.css';

type UserCardProps = {
	user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
	return (
		<div className={cls.UserCard}>
			<Link to={`/users/${user.id}`}>
				<h2>{user.name}</h2>
			</Link>
			<p>Username: {user.username}</p>
			<p>Email: {user.email}</p>
			<p>Phone: {user.phone}</p>
			<p>Website: {user.website}</p>

			<div className={cls.address}>
				<h3>Address</h3>
				<p>
					{user.address.street}, {user.address.suite}
				</p>
				<p>
					{user.address.city}, {user.address.zipcode}
				</p>
				<p>
					Geo: {user.address.geo.lat}, {user.address.geo.lng}
				</p>
			</div>

			<div className={cls.company}>
				<h3>Company</h3>
				<p>{user.company.name}</p>
				<p>{user.company.catchPhrase}</p>
				<p>{user.company.bs}</p>
			</div>
		</div>
	);
};
