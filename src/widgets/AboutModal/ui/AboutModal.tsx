import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import cls from './AboutModal.module.css';

type AboutProps = {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
};

export const AboutModal = ({ className, isOpen, onClose }: AboutProps) => {
	return (
		<Modal
			className={classNames(cls.AboutModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
		>
			<Modal.Header closeButton>О проекте</Modal.Header>
			<Modal.Body>
				<p>Aston React course project, version 0.1</p>
			</Modal.Body>
		</Modal>
	);
};
