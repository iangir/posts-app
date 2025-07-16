import { Loader } from 'shared/ui/Loader/Loader';

type withLoadingProps = {
	isLoading: boolean;
};

export function withLoading<T>(WrappedComponent: React.ComponentType<T>) {
	return (props: T & withLoadingProps) => {
		if (props.isLoading) {
			return <Loader />;
		}
		return <WrappedComponent {...props} />;
	};
}
