import type { RouteProps } from 'react-router-dom';
import { PostsPage } from 'pages/PostsPage';
import { PostDetailsPage } from 'pages/PostDetailsPage';
import { AlbumsPage } from 'pages/AlbumsPage';
import { PhotosPage } from 'pages/PhotosPage';
import { TodosPage } from 'pages/TodosPage';
import { UserPage } from 'pages/UserPage';

export const AppRoutes = {
	POSTS: 'posts',
	USER: 'user',
	POST_DETAILS: 'post_details',
	USER_ALBUMS: 'user_albums',
	ALBUM_PHOTOS: 'album_photos',
	USER_TODOS: 'user_todos',
	USER_POSTS: 'user_posts',
} as const;

export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.POSTS]: '/posts',
	[AppRoutes.POST_DETAILS]: '/posts/:id',
	[AppRoutes.USER]: '/users/:id',
	[AppRoutes.USER_ALBUMS]: '/users/:id/albums',
	[AppRoutes.ALBUM_PHOTOS]: '/albums/:id/photos',
	[AppRoutes.USER_TODOS]: '/users/:id/todos',
	[AppRoutes.USER_POSTS]: '/users/:id/posts',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.POSTS]: {
		path: RoutePath.posts,
		element: <PostsPage />,
	},
	[AppRoutes.POST_DETAILS]: {
		path: RoutePath.post_details,
		element: <PostDetailsPage />,
	},
	[AppRoutes.USER]: {
		path: RoutePath.user,
		element: <UserPage />,
	},
	[AppRoutes.USER_ALBUMS]: {
		path: RoutePath.user_albums,
		element: <AlbumsPage />,
	},
	[AppRoutes.ALBUM_PHOTOS]: {
		path: RoutePath.album_photos,
		element: <PhotosPage />,
	},
	[AppRoutes.USER_TODOS]: {
		path: RoutePath.user_todos,
		element: <TodosPage />,
	},
	[AppRoutes.USER_POSTS]: {
		path: RoutePath.user_posts,
		element: <PostsPage />,
	},
};
