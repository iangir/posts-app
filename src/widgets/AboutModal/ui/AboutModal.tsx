import Modal from 'shared/ui/Modal/Modal';
import cls from './AboutModal.module.css';

type AboutProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const AboutModal = ({ isOpen, onClose }: AboutProps) => {
	return (
		<Modal className={cls.AboutModal} isOpen={isOpen} onClose={onClose}>
			<Modal.Header closeButton>О проекте</Modal.Header>
			<Modal.Body>
				<p>Aston React course project, version 0.1</p>
			</Modal.Body>
		</Modal>
	);
};
