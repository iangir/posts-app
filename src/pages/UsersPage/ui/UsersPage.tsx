import { useUsers } from 'features/PostList/model/hooks/useUsers';
import { UsersList } from 'widgets/UsersList';
import cls from './UsersPage.module.css';

export const UsersPage = () => {
	const { users, loading, error } = useUsers();

	if (!users || !Array.isArray(users)) {
		return <div>Пользователи не найдены</div>;
	}

	return (
		<div className={cls.UsersPage}>
			<UsersList users={users} loading={loading} error={error} />
		</div>
	);
};
