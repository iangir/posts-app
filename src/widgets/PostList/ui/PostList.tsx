import type { Post } from 'entities/post';
import { PostCard } from 'entities/post';
import cls from './PostList.module.css';

type PostListProps = {
	posts: Post[];
};

export const PostList = ({ posts }: PostListProps) => {
	return (
		<div className={cls.PostList}>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
};
