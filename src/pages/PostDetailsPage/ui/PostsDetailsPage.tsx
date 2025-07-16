import { PostCard, type Post } from 'entities/post';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'shared/api/api';
import MainLayout from 'shared/layouts/MainLayout/MainLayout';
import { Loader } from 'shared/ui/Loader/Loader';

type PostDetailsPageProps = {
	className?: string;
};

export const PostDetailsPage = ({ className }: PostDetailsPageProps) => {
	const { id } = useParams();
	const [post, setPost] = useState<Post | null>(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchPosts = async () => {
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

		fetchPosts();
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (!post) {
		return <div>Пост не найден</div>;
	}

	return (
		<MainLayout>
			<PostCard post={post} />
		</MainLayout>
	);
};
