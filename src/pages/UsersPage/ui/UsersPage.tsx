import { useGetUsersQuery } from 'entities/user/model/api/userApi';
import {
	selectFilteredUsers,
	selectUsersError,
	selectUsersStatus,
} from 'entities/user/model/slice/userSlice';
import { UserNameFilter } from 'features/UserNameFilter/UserNameFilter';
import { useSelector } from 'react-redux';
import { useAppSelector } from 'shared/lib/hooks/storeHooks';
import { Loader } from 'shared/ui/Loader/Loader';
import { UsersList } from 'widgets/UsersList';
import cls from './UsersPage.module.css';

export const UsersPage = () => {
	const { data, isLoading, error } = useGetUsersQuery();
	const status = useSelector(selectUsersStatus);
	const currentFilter = useAppSelector((state) => state.users.filter);
	const filterError = useSelector(selectUsersError);
	const filteredUsers = useSelector(selectFilteredUsers);

	const users = currentFilter ? filteredUsers : data;

	if (!users) {
		return <div>Пользователи не найдены</div>;
	}

	if (status === 'loading' || isLoading) {
		return <Loader />;
	}

	if (error) {
		return <div>{filterError}</div>;
	}

	return (
		<div className={cls.UsersPage}>
			<UserNameFilter filter={currentFilter} />
			<UsersList users={users} />
		</div>
	);
};
