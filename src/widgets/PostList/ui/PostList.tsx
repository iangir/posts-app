import type { Post } from 'app/postsReqestMock';
import { PostCard } from 'entities/post';

type PostListProps = {
	posts: Post[];
};

export const PostList = ({ posts }: PostListProps) => {
	return (
		<div>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
};
