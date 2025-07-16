import { useRef } from 'react';
import { flushSync } from 'react-dom';
import useTheme from 'shared/lib/theme/useTheme';
import { Theme } from 'shared/lib/theme/ThemeContext';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/sunIcon.svg';
import DarkIcon from 'shared/assets/icons/moonIcon.svg';

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();
	const ref = useRef<HTMLButtonElement>(null);

	const toggleAnimationMode = async () => {
		/**
		 * Return early if View Transition API is not supported
		 * or user prefers reduced motion
		 */
		if (
			!ref.current ||
			!document.startViewTransition ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			toggleTheme();
			return;
		}

		await document.startViewTransition(() => {
			flushSync(() => {
				toggleTheme();
			});
		}).ready;
		const { top, left, width, height } = ref.current.getBoundingClientRect();
		const x = left + width / 2;
		const y = top + height / 2;
		const right = window.innerWidth - left;
		const bottom = window.innerHeight - top;
		const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRadius}px at ${x}px ${y}px)`,
				],
			},
			{
				duration: 750,
				easing: 'ease-in-out',
				pseudoElement: '::view-transition-new(root)',
			}
		);
	};

	return (
		<Button
			onClick={toggleAnimationMode}
			theme={ButtonThemeEnum.ICON}
			ref={ref}
			title={`Change to ${theme === Theme.LIGHT ? 'dark' : 'light'} theme`}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};
