import cls from './ModalFooter.module.css';

export const ModalFooter = ({ children }: React.PropsWithChildren) => {
	return <div className={cls.ModalFooter}>{children}</div>;
};
