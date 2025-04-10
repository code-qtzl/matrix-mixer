export const SelectedItems = ({ selectedItems, onRemove }) => {
	if (selectedItems.length === 0) {
		return <div className='Selected-items'>No items selected</div>;
	}

	return (
		<div className='Selected-items'>
			<h3>Selected Items:</h3>
			<div className='Selected-items__list'>
				{selectedItems.map((item) => (
					<span key={item} className='Selected-items__badge'>
						{item}
						<button
							className='Selected-items__remove'
							onClick={() => onRemove(item)}
							aria-label={`Remove ${item}`}
						>
							×
						</button>
					</span>
				))}
			</div>
		</div>
	);
};
