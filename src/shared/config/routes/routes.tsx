export const AppRoutes = {
	MAIN: 'main',
	POSTS: 'posts',
	POST_DETAILS: 'post_details',
	USERS: 'users',
	USER_DETAILS: 'user_details',
	USER_ALBUMS: 'user_albums',
	USER_TODOS: 'user_todos',
	USER_POSTS: 'user_posts',
	ALBUM_PHOTOS: 'album_photos',
} as const;

export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.POSTS]: '/posts',
	[AppRoutes.POST_DETAILS]: '/posts/:id',
	[AppRoutes.USERS]: '/users',
	[AppRoutes.USER_DETAILS]: '/users/:id',
	[AppRoutes.USER_ALBUMS]: '/users/:id/albums',
	[AppRoutes.USER_TODOS]: '/users/:id/todos',
	[AppRoutes.USER_POSTS]: '/users/:id/posts',
	[AppRoutes.ALBUM_PHOTOS]: '/albums/:id/photos',
};
