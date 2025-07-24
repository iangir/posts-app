import { PostCard, type Post } from 'entities/post';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'shared/api/api';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PostsDetailsPage.module.css';

export const PostDetailsPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState<Post | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const data = await api.get<Post>(`/posts/${id}`);
				setPost(data);
				setPost(data);
			} catch (err) {
				console.log(err instanceof Error ? err.message : 'Failed to fetch posts');
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (!post) {
		return <div>Пост не найден</div>;
	}

	return (
		<div className={cls.PostDetailsPage}>
			<PostCard post={post} />
		</div>
	);
};
