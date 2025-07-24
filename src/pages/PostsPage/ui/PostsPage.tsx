import type { Post } from 'entities/post';
import { usePosts } from 'features/PostList/model/hooks/usePosts';
import { useEffect, useRef, useState } from 'react';
import { PostListWithLoading } from 'widgets/PostList';
import cls from './PostsPage.module.css';

export const PostsPage = () => {
	const { posts, loading, error } = usePosts();
	const [postsState, setPostsState] = useState<Post[]>(posts);
	const originalPosts = useRef<Post[]>(posts);

	useEffect(() => {
		setPostsState(posts);
		originalPosts.current = posts;
	}, [posts]);

	return (
		<div className={cls.PostsPage}>
			<PostListWithLoading posts={postsState} loading={loading} error={error} />
		</div>
	);
};
