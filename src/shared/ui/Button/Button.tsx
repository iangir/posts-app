import type { ButtonHTMLAttributes, RefObject } from 'react';
import type { Mods } from 'shared/lib/classNames/classNames';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.css';

export const ButtonThemeEnum = {
	CLEAR: 'clear',
	OUTLINE: 'outline',
	ICON: 'icon',
} as const;

type ButtonTheme = (typeof ButtonThemeEnum)[keyof typeof ButtonThemeEnum];

export const ButtonColorEnum = {
	RED: 'red',
	GREEN: 'green',
} as const;

type ButtonColor = (typeof ButtonColorEnum)[keyof typeof ButtonColorEnum];

export const ButtonSizeEnum = {
	DEFAULT: 'm',
	SMALL: 's',
	LARGE: 'l',
	ALL_SPACE: 'allSpace',
} as const;

type ButtonSize = (typeof ButtonSizeEnum)[keyof typeof ButtonSizeEnum];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	color?: ButtonColor;
	size?: ButtonSize;
	disabled?: boolean;
	ref?: RefObject<HTMLButtonElement | null>;
}

export const Button = (props: ButtonProps) => {
	const {
		children,
		className,
		theme,
		color,
		size = 'default',
		disabled,
		type = 'button',
		ref,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.disabled]: disabled,
	};

	return (
		<button
			className={classNames(cls.Button, mods, [
				className,
				theme && cls[theme],
				color && cls[color],
				cls[size],
			])}
			disabled={disabled}
			type={type}
			ref={ref}
			{...otherProps}
		>
			{children}
		</button>
	);
};
