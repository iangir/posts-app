import type { PostComment } from '../model/types/comment';
import cls from './CommentCard.module.css';

type CommentProps = {
	comment: PostComment;
};

export const Comment = ({ comment }: CommentProps) => {
	return (
		<div className={cls.CommentCard}>
			<a href={`user/${comment.email}`} className={cls.commentName}>
				{comment.email}
			</a>
			<p className={cls.commentBody}>{comment.body}</p>
		</div>
	);
};
