import { ThemeSwitcher } from 'features/ThemeSwitcher';
import cls from './LayoutHeader.module.css';
import { useState, useCallback, Fragment } from 'react';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { AboutModal } from 'widgets/AboutModal/AboutModal';

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
							<Button
								theme={ButtonThemeEnum.CLEAR}
								onClick={isAboutModal ? onCloseModal : onShowModal}
							>
								О проекте
							</Button>
						</li>
						<li>
							<ThemeSwitcher />
						</li>
						<li>
							<a href='#'>Log in</a>
						</li>
					</ul>
				</nav>
			</header>
			{isAboutModal && <AboutModal isOpen={isAboutModal} onClose={onCloseModal} />}
		</Fragment>
	);
};
