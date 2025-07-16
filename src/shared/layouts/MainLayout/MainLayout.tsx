import { LayoutHeader } from 'widgets/LayoutHeader';
import { LayoutFooter } from 'widgets/LayoutFooter';
import cls from './MainLayout.module.css';

type MainLayoutProps = {
	leftSidebar?: React.ReactNode;
	rightSidebar?: React.ReactNode;
} & React.PropsWithChildren;

const MainLayout = ({ children, leftSidebar, rightSidebar }: MainLayoutProps) => {
	return (
		<div className={cls.MainLayout}>
			<LayoutHeader />
			<div className={cls.contentWrapper}>
				{leftSidebar && <aside className={cls.leftSidebar}>{leftSidebar}</aside>}
				<div className={cls.content}>{children}</div>
				{rightSidebar && <aside className={cls.rightSidebar}>{rightSidebar}</aside>}
			</div>
			<LayoutFooter />
		</div>
	);
};

export default MainLayout;
