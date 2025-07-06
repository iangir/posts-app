import { createContext } from 'react';

export const Theme = {
	LIGHT: 'dark',
	DARK: 'light',
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

export type ThemeContextProps = {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
