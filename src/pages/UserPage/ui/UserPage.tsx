import MainLayout from 'shared/layouts/MainLayout/MainLayout';
import { classNames } from 'shared/lib/classNames/classNames';
import { UserTabs } from 'widgets/UserTabs';
import { Loader } from 'shared/ui/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useUser } from 'features/PostList/model/hooks/useUser';
import cls from './UserPage.module.css';

type UserPageProps = {
	className?: string;
	userId?: number;
};

export const UserPage = ({ className }: UserPageProps) => {
	const { id } = useParams();
	const { user, loading, error } = useUser(id || '');

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	return (
		<div className={classNames(cls.PostsPage, {}, [className])}>
			<MainLayout leftSidebar={<UserTabs />}>
				<div className={cls.userProfile}>
					<h2>{user.name}</h2>
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
			</MainLayout>
		</div>
	);
};
