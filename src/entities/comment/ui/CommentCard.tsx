import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routes/routes';
import type { PostComment } from '../model/types/comment';
import cls from './CommentCard.module.css';

type CommentProps = {
	comment: PostComment;
};

export const Comment = ({ comment }: CommentProps) => {
	const username = comment.email.split('@')[0];
	const userId = Math.floor(Math.random() * 10) + 1;

	return (
		<div className={cls.CommentCard}>
			<Link
				to={RoutePath.user_details.replace(':id', userId.toString())}
				className={cls.commentName}
			>
				{username}
			</Link>
			<p className={cls.commentBody}>{comment.body}</p>
		</div>
	);
};
