import { useContext } from 'react';
import Cross from 'shared/assets/icons/cross.svg';
import { Button, ButtonColorEnum, ButtonThemeEnum } from '../../Button/Button';
import { ModalContext } from '../Modal';
import cls from './ModalHeader.module.css';

type ModalHeaderProps = {
	closeButton?: boolean;
} & React.PropsWithChildren;

export const ModalHeader = ({ children, closeButton }: ModalHeaderProps) => {
	const { onClose } = useContext(ModalContext);
	return (
		<div className={cls.ModalHeader}>
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
