import { LayoutHeader } from 'widgets/LayoutHeader/LayoutHeader';
import { LayoutFooter } from 'widgets/LayoutFooter/LayoutFooter';
import cls from './MainLayout.module.css';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={cls.mainLayout}>
			<LayoutHeader />
			<div className={cls.content}>{children}</div>
			<LayoutFooter />
		</div>
	);
};

export default MainLayout;
