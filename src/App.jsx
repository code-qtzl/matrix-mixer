import { useState, useCallback } from 'react';
import { List } from './components/List';
import { SIZES, COLORS, FRUITS } from './data/constants';
import { generateItems } from './utils/itemsGenerator';
import { SelectedItems } from './components/SelectedItems';

function App() {
	const items = generateItems(SIZES, FRUITS, COLORS);
	const [selectedItems, setSelectedItems] = useState(new Set());

	const handleToggleItem = useCallback((itemName) => {
		setSelectedItems((prev) => {
			const newSelected = new Set(prev);
			if (newSelected.has(itemName)) {
				newSelected.delete(itemName);
			} else {
				newSelected.add(itemName);
			}
			return newSelected;
		});
	}, []);

	return (
		<div className='app'>
			<div className='sidebar'>
				<SelectedItems
					selectedItems={Array.from(selectedItems)}
					onRemove={handleToggleItem}
				/>
			</div>
			<div className='content'>
				<List
					items={items}
					selectedItems={selectedItems}
					onToggleItem={handleToggleItem}
				/>
			</div>
		</div>
	);
}

export default App;
