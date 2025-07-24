import { Comment } from 'entities/comment';
import type { PostComment } from 'entities/comment';
import cls from './CommentList.module.css';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

type CommentListProps = {
	comments: PostComment[];
	loading: boolean;
	isShown: boolean;
};

export const CommentList = ({ comments, loading, isShown }: CommentListProps) => {
	if (!isShown) {
		return null;
	}

	if (loading) {
		return (
			<div className={cls.CommentList}>
				<Skeleton width='10rem' height='1rem' />
				<Skeleton width='100%' height='3rem' />
				<Skeleton width='16rem' height='1rem' />
				<Skeleton width='100%' height='3rem' />
			</div>
		);
	}

	if (!comments) {
		return <div className={cls.CommentList}>Произошла ошибка</div>;
	}

	if (comments.length === 0) {
		return <div className={cls.CommentList}>Нет комментариев</div>;
	}

	return (
		<div className={cls.CommentList}>
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
};
