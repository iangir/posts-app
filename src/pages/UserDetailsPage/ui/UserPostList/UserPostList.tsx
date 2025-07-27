import { useGetPostsByUserIdQuery } from 'entities/post/model/api/postsApi';
import { useParams } from 'react-router-dom';
import { PostsList } from 'widgets/PostsList';

export const UserPostList = () => {
	const { id } = useParams();

	const { data: posts, isLoading: loading, error } = useGetPostsByUserIdQuery(id ?? '1');

	if (!posts) return null;

	return (
		<PostsList posts={posts} loading={loading} error={error && 'Не удалось загрузить посты'} />
	);
};
