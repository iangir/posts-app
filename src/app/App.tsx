import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/AppRouter';

function App() {
	return <RouterProvider router={router} />;
}

export default App;
