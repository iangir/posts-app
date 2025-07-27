type ItemListProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => React.ReactNode;
	keyExtractor?: (item: T, index: number) => string | number;
	emptyListComponent?: React.ReactNode;
	listContainer?: React.ElementType;
	listItemContainer?: React.ElementType;
	listContainerProps?: React.HTMLAttributes<HTMLElement>;
	listItemContainerProps?: React.HTMLAttributes<HTMLElement>;
};

export function ItemList<T>({
	items,
	renderItem,
	keyExtractor = (_, index) => index,
	emptyListComponent = <div>No items found</div>,
	listContainer: ListContainer = 'div',
	listItemContainer: ListItemContainer = 'div',
	listContainerProps = {},
	listItemContainerProps = {},
}: ItemListProps<T>): React.ReactElement {
	if (items.length === 0) {
		return <>{emptyListComponent}</>;
	}

	return (
		<ListContainer {...listContainerProps}>
			{items.map((item, index) => (
				<ListItemContainer key={keyExtractor(item, index)} {...listItemContainerProps}>
					{renderItem(item, index)}
				</ListItemContainer>
			))}
		</ListContainer>
	);
}
