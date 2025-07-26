import { Outlet } from 'react-router-dom';
import { LayoutFooter } from 'widgets/LayoutFooter';
import { LayoutHeader } from 'widgets/LayoutHeader';
import cls from './MainLayout.module.css';

type MainLayoutProps = {
	leftSidebar?: React.ReactNode;
	rightSidebar?: React.ReactNode;
};

const MainLayout = ({ leftSidebar, rightSidebar }: MainLayoutProps) => {
	return (
		<div className={cls.MainLayout}>
			<LayoutHeader />
			<div className={cls.contentWrapper}>
				{leftSidebar && <aside className={cls.leftSidebar}>{leftSidebar}</aside>}
				<div className={cls.content}>
					<Outlet />
				</div>
				{rightSidebar && <aside className={cls.rightSidebar}>{rightSidebar}</aside>}
			</div>
			<LayoutFooter />
		</div>
	);
};

export default MainLayout;
