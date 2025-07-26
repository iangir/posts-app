import { UserCard } from 'entities/user';
import { useUsers } from 'features/PostList/model/hooks/useUsers';
import { Outlet, useParams } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import { UserTabs } from 'widgets/UserTabs';
import cls from './UserDetailsPage.module.css';

export const UserDetailsPage = () => {
	const { id } = useParams();
	const { users, loading, error } = useUsers(id);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!users || Array.isArray(users)) {
		return <div>Пользователь не найден</div>;
	}

	return (
		<div className={cls.UserDetailsPage}>
			<UserCard user={users} />
			<div className={cls.tabsWrapper}>
				<UserTabs />
				<Outlet />
			</div>
		</div>
	);
};
