import React,{useState} from 'react'

const Accounts = () => {
    const initialItems = [
        { id: 1, label: 'Account 1' },
        { id: 2, label: 'Account 2' },
        { id: 3, label: 'Account 3' },
        // Add more items as needed
      ];
    
      const [selectedItems, setSelectedItems] = useState([]);
    
      const handleCheckboxChange = (itemId) => {
    // Check if the item is already selected
    if (selectedItems.includes(itemId)) {
        // If selected, remove it from the array
        setSelectedItems(selectedItems.filter((id) => id !== itemId));
      } else {
        // If not selected, add it to the array
        setSelectedItems([...selectedItems, itemId]);
      }
    };
    const handleSelectAll = () => {
        // If all items are already selected, clear the selection; otherwise, select all items
        setSelectedItems(
          selectedItems.length === initialItems.length
            ? []
            : initialItems.map((item) => item.id)
        );
      };
  return (
    <div className='flex flex-col items-center justify-center'>
    <button onClick={handleSelectAll} className='btn-select'>
        {selectedItems.length === initialItems.length ? 'Deselect All' : 'Select All'}
      </button>
    <ul className='mt-2'>
      {initialItems.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.label}
          </label>
        </li>
      ))}
    </ul>

    <p>Selected Items: {selectedItems.join(', ')}</p>
  </div>
  )
}

export default Accounts