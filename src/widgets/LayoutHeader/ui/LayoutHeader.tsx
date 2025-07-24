import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Fragment, lazy, Suspense, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath } from 'shared/config/routes/routes';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { Loader } from 'shared/ui/Loader/Loader';
import Modal from 'shared/ui/Modal/Modal';
import cls from './LayoutHeader.module.css';

const AboutModal = lazy(() =>
	import('widgets/AboutModal/ui/AboutModal').then((module) => ({ default: module.AboutModal }))
);

export const LayoutHeader = () => {
	const [isAboutModal, setIsAboutModal] = useState(false);

	const onShowModal = useCallback(() => {
		setIsAboutModal(true);
	}, []);

	const onCloseModal = useCallback(() => {
		setIsAboutModal(false);
	}, []);

	return (
		<Fragment>
			<header className={cls.layoutHeader}>
				<nav className={cls.navbarContainer}>
					<NavLink to={RoutePath.main} className={cls.navLink}>
						Logo
					</NavLink>
					<NavLink to={RoutePath.posts} className={cls.navLink}>
						Posts
					</NavLink>
					<NavLink to={RoutePath.users} className={cls.navLink}>
						Users
					</NavLink>
					<ul className={cls.navbarList}>
						<li>
							<ThemeSwitcher />
						</li>
						<li>
							<Button
								theme={ButtonThemeEnum.CLEAR}
								onClick={isAboutModal ? onCloseModal : onShowModal}
							>
								О проекте
							</Button>
						</li>
					</ul>
				</nav>
			</header>
			<Suspense
				fallback={
					<Modal isOpen>
						<Loader />
					</Modal>
				}
			>
				{isAboutModal && <AboutModal isOpen={isAboutModal} onClose={onCloseModal} />}
			</Suspense>
		</Fragment>
	);
};
