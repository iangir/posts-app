import type { Post } from 'entities/post';
import { PostCard } from 'entities/post';
import cls from './PostList.module.css';
import { Loader } from 'shared/ui/Loader/Loader';

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
		return <div>{error}</div>; // TODO: add error message
	}

	return (
		<div className={cls.PostList}>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
};
