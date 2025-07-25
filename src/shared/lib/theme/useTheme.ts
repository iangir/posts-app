import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

type UseThemeResult = {
	toggleTheme: () => void;
	theme: Theme;
};

export default function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);
	document.documentElement.className = theme || '';

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};
	return { theme: theme || Theme.LIGHT, toggleTheme };
}
