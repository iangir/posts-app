import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.css';

type LoaderProps = {
	className?: string;
};
export const Loader = ({ className }: LoaderProps) => (
	<div className={classNames(cls.Loader, {}, [className])} />
);
