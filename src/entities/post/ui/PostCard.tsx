import { useEffect, useState } from 'react';
import type { Post } from 'entities/post';
import { CommentList } from 'widgets/CommentList';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import CommentsIcon from 'shared/assets/icons/comments.svg';
import cls from './PostCard.module.css';
import fetchCommentsMock from 'app/commentsRequestMock';
import type { PostComment } from 'entities/comment';

type PostCardProps = {
	post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
	const [comments, setComments] = useState<PostComment[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		fetchCommentsMock(post.id).then((res) => {
			setComments(res);
			setIsLoading(false);
		});
	}, []);

	const commentBtnHandler = () => {
		setIsShown(!isShown);
	};

	return (
		<article className={cls.PostCard}>
			<header>
				<h3>
					<a href={`/posts/${post.id.toString()}`} className={cls.postTitle}>
						{post.title}
					</a>
				</h3>
			</header>
			<p>{post.body}</p>
			<Button
				onClick={commentBtnHandler}
				theme={ButtonThemeEnum.CLEAR}
				className={cls.commentsBtn}
			>
				<CommentsIcon />
				{!isLoading && comments.length}
			</Button>
			<CommentList comments={comments} isLoading={isLoading} isShown={isShown} />
		</article>
	);
};
