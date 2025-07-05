import type { Post } from 'app/postsReqestMock';
import cls from './PostCard.module.css';

type PostCardProps = {
	post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
	return (
		<article className={cls.PostCard}>
			<header>
				<h3>
					<a href={`/posts/${post.id.toString()}`}>{post.title}</a>
				</h3>
			</header>
			<p>{post.body}</p>
		</article>
	);
};
