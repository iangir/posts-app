import type { Post } from 'entities/post';
import { useGetPostsQuery } from 'entities/post/model/api/postsApi';
import { PostLengthFilter } from 'features/PostLentgthFilter';
import { useState } from 'react';
import { PostsListWithLoading } from 'widgets/PostsList';
import cls from './PostsPage.module.css';

export const PostsPage = () => {
	const { data, isLoading: loading, error } = useGetPostsQuery();
	const [posts, setPosts] = useState<Post[]>(data || []);

	if (!data) return null;

	const handleSort = (posts: Post[]) => {
		setPosts(posts);
	};

	return (
		<div className={cls.PostsPage}>
			<PostLengthFilter posts={data} onSort={handleSort} />
			<PostsListWithLoading
				posts={posts}
				loading={loading}
				error={error && 'Произошла ошибка'}
			/>
		</div>
	);
};
