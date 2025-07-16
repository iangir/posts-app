import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../../../shared/config/routeConfig/routeConfig';
// import { PageLoader } from '/widgets/PageLoader';
import { Loader } from 'shared/ui/Loader/Loader';

export const AppRouter = () => (
	<Suspense fallback={<Loader />}>
		<Routes>
			{Object.values(routeConfig).map(({ path, element }) => (
				<Route key={path} path={path} element={element} />
			))}
		</Routes>
	</Suspense>
);
