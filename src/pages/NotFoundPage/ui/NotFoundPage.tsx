import { Link } from 'react-router-dom';
import cls from './NotFoundPage.module.css';

export const NotFoundPage = () => {
	return (
		<div className={cls.NotFoundPage}>
			<h1>404</h1>
			<p>Page not found</p>
			<Link to='/'>Home page</Link>
		</div>
	);
};

export default NotFoundPage;
