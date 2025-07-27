import { skipToken } from '@reduxjs/toolkit/query';
import { PostCard } from 'entities/post';
import { useGetPostByIdQuery } from 'entities/post/model/api/postsApi';
import { useParams } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PostsDetailsPage.module.css';

export const PostDetailsPage = () => {
	const { id } = useParams();

	const { data: post, isLoading, error } = useGetPostByIdQuery(id ?? skipToken);

	if (isLoading) {
		return <Loader />;
	}

	if (!post) {
		return <div>Пост не найден</div>;
	}

	if (error) {
		return <div>Произошла ошибка</div>;
	}

	return (
		<div className={cls.PostDetailsPage}>
			<PostCard post={post} />
		</div>
	);
};
