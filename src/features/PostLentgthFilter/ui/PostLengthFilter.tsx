import type { Post } from 'entities/post';
import { useEffect, useState } from 'react';
import Arrow from 'shared/assets/icons/arrowUp.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { filterByLength } from '../lib/filterByLength';
import cls from './PostLengthFilter.module.css';

type PostLengthFilterProps = {
	className?: string;
	posts: Post[];
	onSort: (posts: Post[]) => void;
};

export const PostLengthFilter = ({ className, posts, onSort }: PostLengthFilterProps) => {
	const [order, setOrder] = useState<'asc' | 'desc' | null>(null);

	useEffect(() => {
		if (order === null) onSort(posts);
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
		onSort(posts);
	};

	return (
		<div className={cls.PostLengthFilter}>
			<Button
				theme={ButtonThemeEnum.CLEAR}
				className={classNames(
					cls.flterBtn,
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
				className={classNames(cls.resetBtn, {}, [className])}
				onClick={handleReset}
			>
				Reset
			</Button>
		</div>
	);
};
