import type { User } from 'entities/user';
import { UserCard } from 'entities/user';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './UsersList.module.css';

type UsersListProps = {
	users: User[];
	loading: boolean;
	error: string | null;
};

export const UsersList = ({ users, loading, error }: UsersListProps) => {
	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>{error}</div>;
	}
	return (
		<div className={cls.UserList}>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
};
