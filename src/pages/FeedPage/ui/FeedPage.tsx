import { classNames } from 'shared/lib/classNames/classNames';
import MainLayout from 'shared/layouts/MainLayout/MainLayout';
import { withLoading } from 'shared/lib/hoc/withLodaing';
import { PostList } from 'widgets/PostList';
import cls from './FeedPage.module.css';
import { PostLengthFilter } from 'features/PostLentgthFilter';
import { useEffect, useRef, useState } from 'react';
import type { Post } from 'entities/post';
import fetchPostsMock from 'app/postsReqestMock';

interface FeedPageProps {
	className?: string;
}

const PostListWithLoading = withLoading(PostList);

export const FeedPage = ({ className }: FeedPageProps) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);
	const originalPosts = useRef<Post[]>([]);

	useEffect(() => {
		setLoading(true);
		fetchPostsMock().then((posts) => {
			setPosts(posts);
			originalPosts.current = posts;
			setLoading(false);
		});
	}, []);

	const handleSortedPosts = (sortedPosts: Post[]) => {
		setPosts(sortedPosts);
	};

	return (
		<div className={classNames(cls.FeedPage, {}, [className])}>
			<MainLayout leftSidebar={<PostLengthFilter posts={posts} onSort={handleSortedPosts} />}>
				<PostListWithLoading posts={posts} isLoading={loading} />
			</MainLayout>
		</div>
	);
};

export default FeedPage;
