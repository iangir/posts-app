import type { User } from 'entities/user';
import { UserCard } from 'entities/user';
import cls from './UsersList.module.css';

type UsersListProps = {
	users: User[];
};

export const UsersList = ({ users }: UsersListProps) => {
	return (
		<div className={cls.UserList}>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
};
