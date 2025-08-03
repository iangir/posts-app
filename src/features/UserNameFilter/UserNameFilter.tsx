import { clearFilter, filterUsersByUsername } from 'entities/user/model/slice/userSlice';
import { useAppDispatch } from 'shared/lib/hooks/storeHooks';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import cls from './UserNameFilter.module.css';

type UserNameFilterProps = {
	filter: string;
};

export const UserNameFilter = ({ filter }: UserNameFilterProps) => {
	const dispatch = useAppDispatch();

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(filterUsersByUsername(e.target.value));
	};

	const handleClearFilter = () => dispatch(clearFilter());

	return (
		<div className={cls.UserNameFilter}>
			<input
				type='text'
				placeholder='Filter by username'
				value={filter}
				onChange={handleFilterChange}
				className={cls.filterInput}
			/>
			{filter && (
				<Button onClick={handleClearFilter} theme={ButtonThemeEnum.OUTLINE}>
					Clear
				</Button>
			)}
		</div>
	);
};
