import { classNames } from 'shared/lib/classNames/classNames';
import MainLayout from 'shared/layouts/MainLayout/MainLayout';
import { withLoading } from 'shared/lib/hoc/withLodaing';
import { PostList } from 'widgets/PostList';
import { PostLengthFilter } from 'features/PostLentgthFilter';
import { useEffect, useRef, useState } from 'react';
import type { Post } from 'entities/post';
import cls from './PostsPage.module.css';
import { usePosts } from 'features/PostList/model/hooks/usePost';

interface PostsPageProps {
	className?: string;
}

const PostListWithLoading = withLoading(PostList);

export const PostsPage = ({ className }: PostsPageProps) => {
	const { posts, loading, error } = usePosts();
	const [postsState, setPostsState] = useState<Post[]>(posts);
	const originalPosts = useRef<Post[]>(posts);

	useEffect(() => {
		setPostsState(posts);
		originalPosts.current = posts;
	}, [posts]);

	const handleSortedPosts = (sortedPosts: Post[]) => {
		setPostsState(sortedPosts);
	};

	return (
		<div className={classNames(cls.PostsPage, {}, [className])}>
			<MainLayout leftSidebar={<PostLengthFilter posts={posts} onSort={handleSortedPosts} />}>
				<PostListWithLoading posts={postsState} loading={loading} error={error} />
			</MainLayout>
		</div>
	);
};
