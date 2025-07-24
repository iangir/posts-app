import type { PostComment } from 'entities/comment';
import type { Post } from 'entities/post';
import { useEffect, useState } from 'react';
import CommentsIcon from 'shared/assets/icons/comments.svg';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { CommentList } from 'widgets/CommentList';
import cls from './PostCard.module.css';

type PostCardProps = {
	post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
	const [comments, setComments] = useState<PostComment[]>([]);
	const [loadingComment, setLoadingComment] = useState(true);
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		setLoadingComment(true);
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
			.then((response) => response.json())
			.then((json) => setComments(json))
			.catch((err) => {
				console.log(err instanceof Error ? err.message : 'Failed to fetch comments');
			})
			.finally(() => setLoadingComment(false));
	}, []);

	const commentBtnHandler = () => {
		setIsShown(!isShown);
	};

	return (
		<article className={cls.PostCard}>
			<header>
				<h3>
					<a href={`/posts/${post.id}`} className={cls.postTitle}>
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
				{!loadingComment && comments.length}
			</Button>
			<CommentList comments={comments} loading={loadingComment} isShown={isShown} />
		</article>
	);
};
