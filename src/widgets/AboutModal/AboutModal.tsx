import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutModal.module.css';
import { lazy, Suspense } from 'react';

type LoginModalProps = {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
};

const Modal = lazy(() =>
	import('shared/ui/Modal/Modal').then((module) => ({ default: module.Modal }))
);
// todo: add Loader

export const AboutModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal
			className={classNames(cls.AboutModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<div>Loading...</div>}>
				<h2>О проекте:</h2>
				<p>Aston React course project, version 0.1</p>
				<Button onClick={onClose} theme={ButtonThemeEnum.OUTLINE}>
					Закрыть
				</Button>
			</Suspense>
		</Modal>
	);
};
