import { ThemeSwitcher } from 'features/ThemeSwitcher';
import cls from './LayoutHeader.module.css';
import { useState, useCallback, Fragment, lazy, Suspense } from 'react';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { Loader } from 'shared/ui/Loader/Loader';
import Modal from 'shared/ui/Modal/Modal';

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
					<a href='#'>Logo</a>
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
