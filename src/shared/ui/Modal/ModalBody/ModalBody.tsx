import cls from './ModalBody.module.css';

export const ModalBody = ({ children }: React.PropsWithChildren) => {
	return <div className={cls.ModalBody}>{children}</div>;
};
