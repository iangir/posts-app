import { usePosts } from 'features/PostList/model/hooks/usePosts';
import { useParams } from 'react-router-dom';
import { PostList } from 'widgets/PostList';

export const UserPostList = () => {
	const { id } = useParams();
	const { posts, loading, error } = usePosts(id);

	return <PostList posts={posts} loading={loading} error={error} />;
};
