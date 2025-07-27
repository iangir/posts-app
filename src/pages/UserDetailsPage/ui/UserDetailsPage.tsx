import { skipToken } from '@reduxjs/toolkit/query';
import { UserCard } from 'entities/user';
import { useGetUserByIdQuery } from 'entities/user/model/api/userApi';
import { Outlet, useParams } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import { UserTabs } from 'widgets/UserTabs';
import cls from './UserDetailsPage.module.css';

export const UserDetailsPage = () => {
	const { id } = useParams();

	const { data: users, isLoading: loading, error } = useGetUserByIdQuery(id ?? skipToken);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Произошла ошибка</div>;
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
