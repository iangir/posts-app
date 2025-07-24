import type { Post } from 'entities/post';
import { PostCard } from 'entities/post';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PostList.module.css';

type PostListProps = {
	posts: Post[];
	loading: boolean;
	error: string | null;
};

export const PostList = ({ posts, loading, error }: PostListProps) => {
	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className={cls.PostList}>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
};
