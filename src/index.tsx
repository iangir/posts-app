import App from 'app/App';
import { store } from 'app/providers/store/store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ThemeProvider from 'shared/lib/theme/ThemeProvider';
import './app/styles/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</StrictMode>
);
