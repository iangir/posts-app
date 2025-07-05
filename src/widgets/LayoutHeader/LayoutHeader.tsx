import cls from './LayoutHeader.module.css';

export const LayoutHeader = () => {
	return (
		<header className={cls.layoutHeader}>
			<nav className={cls.navbarContainer}>
				<ul className={cls.navbarList}>
					<li>
						<a href='#'>Logo</a>
					</li>
					<li>
						<a href='#'>Log in</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
