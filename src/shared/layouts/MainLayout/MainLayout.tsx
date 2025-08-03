import { Outlet } from 'react-router-dom';
import { LayoutFooter } from 'widgets/LayoutFooter';
import { LayoutHeader } from 'widgets/LayoutHeader';
import cls from './MainLayout.module.css';

const MainLayout = () => {
	return (
		<div className={cls.MainLayout}>
			<LayoutHeader />
			<div className={cls.contentWrapper}>
				<div className={cls.content}>
					<Outlet />
				</div>
			</div>
			<LayoutFooter />
		</div>
	);
};

export default MainLayout;
