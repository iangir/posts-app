import { useEffect, useRef, useState } from 'react';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import Arrow from 'shared/assets/icons/arrowUp.svg';
import cls from './PostLengthFilter.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import type { Post } from 'entities/post';
import { filterByLength } from '../lib/filterByLength';

type PostLengthFilterProps = {
	className?: string;
	posts: Post[];
	onSort: (posts: Post[]) => void;
};

export const PostLengthFilter = ({ className, posts, onSort }: PostLengthFilterProps) => {
	const [order, setOrder] = useState<'asc' | 'desc' | null>(null);

	const originalPosts = useRef<Post[]>(posts);

	useEffect(() => {
		if (order === null) originalPosts.current = posts;
	}, [posts]);

	const handleSort = () => {
		let sortedPosts: Post[] = [];
		let newSortOrder: 'asc' | 'desc';

		if (order === null || order === 'desc') {
			sortedPosts = filterByLength(posts, 'desc', 'title');
			newSortOrder = 'asc';
		} else {
			sortedPosts = filterByLength(posts, 'asc', 'title');
			newSortOrder = 'desc';
		}

		setOrder(newSortOrder);
		onSort(sortedPosts);
	};

	const handleReset = () => {
		setOrder(null);
		onSort(originalPosts.current);
	};

	return (
		<>
			<Button
				theme={ButtonThemeEnum.CLEAR}
				className={classNames(
					cls.PostLengthFilter,
					{
						[cls.active]: !!order,
						[cls.arrowDown]: order === 'desc',
					},
					[className]
				)}
				onClick={handleSort}
			>
				<span>Title length:</span>
				<Arrow />
			</Button>
			<Button
				theme={ButtonThemeEnum.CLEAR}
				className={classNames(cls.PostLengthFilter, {}, [className])}
				onClick={handleReset}
			>
				Reset
			</Button>
		</>
	);
};
