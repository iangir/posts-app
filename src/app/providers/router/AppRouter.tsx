import { NotFoundPage } from 'pages/NotFoundPage';
import { PostDetailsPage } from 'pages/PostDetailsPage';
import { PostsPage } from 'pages/PostsPage';
import { UserDetailsPage, UserTodoList } from 'pages/UserDetailsPage';
import { UserAlbumList } from 'pages/UserDetailsPage/ui/UserAlbumList/UserAlbumList';
import { UserPostList } from 'pages/UserDetailsPage/ui/UserPostList/UserPostList';
import { UsersPage } from 'pages/UsersPage';
import { createBrowserRouter } from 'react-router-dom';
import { RoutePath } from 'shared/config/routes/routes';
import MainLayout from 'shared/layouts/MainLayout/MainLayout';
import { PhotoList } from 'widgets/PhotoList/ui/PhotoList';

export const router = createBrowserRouter([
	{
		Component: MainLayout,
		children: [
			{
				path: RoutePath.main,
				Component: PostsPage,
			},
			{
				path: RoutePath.posts,
				Component: PostsPage,
			},
			{
				path: RoutePath.post_details,
				Component: PostDetailsPage,
			},
			{
				path: RoutePath.users,
				Component: UsersPage,
			},
			{
				path: RoutePath.user_details,
				Component: UserDetailsPage,
				children: [
					{
						path: RoutePath.user_todos,
						Component: UserTodoList,
					},
					{
						path: RoutePath.user_albums,
						Component: UserAlbumList,
					},
					{
						path: RoutePath.user_posts,
						Component: UserPostList,
					},
				],
			},
			{
				path: RoutePath.album_photos,
				Component: PhotoList,
			},
		],
		errorElement: <NotFoundPage />,
	},
]);
