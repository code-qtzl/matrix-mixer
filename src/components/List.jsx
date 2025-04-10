import { memo } from 'react';

export const List = memo(({ items, selectedItems, onToggleItem }) => (
	<ul className='List'>
		{items.map((item) => (
			<li
				key={item.name}
				className={`List__item List__item--${item.color} ${
					selectedItems.has(item.name) ? 'List__item--selected' : ''
				}`}
				onClick={() => onToggleItem(item.name)}
			>
				{item.name}
			</li>
		))}
	</ul>
));
