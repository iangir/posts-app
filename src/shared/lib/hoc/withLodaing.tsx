import { Loader } from 'shared/ui/Loader/Loader';

type withLoadingProps = {
	loading: boolean;
};

export function withLoading<T>(WrappedComponent: React.ComponentType<T>) {
	return (props: T & withLoadingProps) => {
		if (props.loading) {
			return <Loader />;
		}
		return <WrappedComponent {...props} />;
	};
}
