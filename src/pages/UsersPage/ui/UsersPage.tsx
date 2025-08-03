import { useGetUsersQuery } from 'entities/user/model/api/userApi';
import { Loader } from 'shared/ui/Loader/Loader';
import { UsersList } from 'widgets/UsersList';
import cls from './UsersPage.module.css';

export const UsersPage = () => {
	const { data: users, isLoading: loading, error } = useGetUsersQuery();

	if (!users || !Array.isArray(users)) {
		return <div>Пользователи не найдены</div>;
	}

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Произошла ошибка</div>;
	}

	return (
		<div className={cls.UsersPage}>
			<UsersList users={users} />
		</div>
	);
};
