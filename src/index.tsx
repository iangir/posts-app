import './app/styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'app/App';
import ThemeProvider from 'shared/lib/theme/ThemeProvider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>
);
