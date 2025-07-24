import { NavLink, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './UserTabs.module.css';

export const UserTabs = () => {
	const { id } = useParams<{ id: string }>();

	if (!id) return null;

	const tabs = [
		{ path: RoutePath.user_posts.replace(':id', id), label: 'Posts' },
		{ path: RoutePath.user_albums.replace(':id', id), label: 'Albums' },
		{ path: RoutePath.user_todos.replace(':id', id), label: 'Todos' },
	];

	return (
		<div className={cls.tabs}>
			{tabs.map((tab) => (
				<NavLink
					key={tab.path}
					to={tab.path}
					className={({ isActive }) => [cls.tab, isActive ? cls.active : ''].join(' ')}
				>
					{tab.label}
				</NavLink>
			))}
		</div>
	);
};
