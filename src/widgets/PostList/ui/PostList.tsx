import type { Post } from 'app/postsReqestMock';
import { PostCard } from 'entities/post';
import { Fragment } from 'react/jsx-runtime';

type PostListProps = {
	posts: Post[];
};

export const PostList = ({ posts }: PostListProps) => {
	return (
		<div>
			{posts.map((post) => (
				<Fragment key={post.id}>
					<PostCard post={post} />
				</Fragment>
			))}
		</div>
	);
};
