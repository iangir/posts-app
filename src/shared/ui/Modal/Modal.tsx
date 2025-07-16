import { useCallback, useEffect, useRef, useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { Portal } from 'shared/lib/Portal/Portal';
import { classNames } from 'shared/lib/classNames/classNames';
import type { Mods } from 'shared/lib/classNames/classNames';
import { Button, ButtonColorEnum, ButtonThemeEnum } from '../Button/Button';
import Cross from 'shared/assets/icons/cross.svg';
import cls from './Modal.module.css';

export type ModalProps = {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
};

type ModalHeaderProps = {
	closeButton?: boolean;
} & React.PropsWithChildren;

const ANIMATION_DELAY = 200;

const ModalContext = createContext({ onClose: () => {} });

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

const ModalHeader = ({ children, closeButton }: ModalHeaderProps) => {
	const { onClose } = useContext(ModalContext);
	return (
		<div className={cls.header}>
			<h2 className={cls.headerTitle}>{children}</h2>
			{closeButton && (
				<Button
					theme={ButtonThemeEnum.ICON}
					color={ButtonColorEnum.RED}
					onClick={onClose}
					className={cls.closeButton}
				>
					<Cross />
				</Button>
			)}
		</div>
	);
};

const ModalBody = ({ children }: React.PropsWithChildren) => {
	return <div className={cls.body}>{children}</div>;
};

const ModalFooter = ({ children }: React.PropsWithChildren) => {
	return <div className={cls.footer}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
