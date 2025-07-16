import cls from './LayoutFooter.module.css';

export const LayoutFooter = () => {
	return (
		<div className={cls.layoutFooter}>
			<a href='#'>
				<span style={{ fontSize: '1.5rem' }}>&uarr;</span> Back to top
			</a>
		</div>
	);
};
