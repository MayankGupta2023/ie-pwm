import React, { useState } from 'react';

const DropdownButton = ({ selectedItem, secondDropdownItems, onSelect, onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen); // Pass the current dropdown state to the parent component
    };

    const handleItemClick = (item) => {
        onSelect(item);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block font-inter  text-left">
            <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center items-center w-44 px-4 py-2  bg-white text-lg font-semibold text-gray-700 hover:bg-gray-50"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
            >
                {selectedItem ? selectedItem : 'Select Subject'}
            </button>

            {isOpen && (
                <div className="z-10 origin-top-right font-medium absolute left-0 w-44  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {secondDropdownItems.map((item, index) => (
                            <div key={index} onClick={() => handleItemClick(item)} className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
