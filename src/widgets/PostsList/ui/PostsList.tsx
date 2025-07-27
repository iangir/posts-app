import type { Post } from 'entities/post';
import { PostCard } from 'entities/post';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PostsList.module.css';

type PostsListProps = {
	posts: Post[];
	loading: boolean;
	error: string | undefined;
};

export const PostsList = ({ posts, loading, error }: PostsListProps) => {
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
