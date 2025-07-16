import './app/styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'app/App';
import ThemeProvider from 'shared/lib/theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
);
