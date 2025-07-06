import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Portal } from 'shared/lib/Portal/Portal';
import { classNames } from 'shared/lib/classNames/classNames';
import type { Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.css';

type ModalProps = {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
};

const ANIMATION_DELAY = 200;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const timerRef = useRef<NodeJS.Timeout>(undefined);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

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
		</Portal>
	);
};
