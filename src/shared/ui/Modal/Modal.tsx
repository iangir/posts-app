import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/lib/Portal/Portal';
import type { Mods } from 'shared/lib/classNames/classNames';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.css';
import { ModalBody } from './ModalBody/ModalBody';
import { ModalContext } from './ModalContext';
import { ModalFooter } from './ModalFooter/ModalFooter';
import { ModalHeader } from './ModalHeader/ModalHeader';

export type ModalProps = {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
};

const ANIMATION_DELAY = 200;

const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<NodeJS.Timeout>(undefined);

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<Portal>
			<ModalContext value={{ onClose: closeHandler }}>
				<div className={classNames(cls.Modal, mods, [])}>
					<div onClick={closeHandler} className={cls.overlay}>
						<div
							onClick={onContentClick}
							className={classNames(cls.content, mods, [className])}
						>
							{children}
						</div>
					</div>
				</div>
			</ModalContext>
		</Portal>
	);
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
