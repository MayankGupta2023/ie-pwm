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
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex border-black border-2 shadow-lg rounded-xl justify-center items-center w-36 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-lg font-semibold text-gray-700 hover:bg-gray-50"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
            >
                {selectedItem ? selectedItem : "Select Language"}
            </button>

            {isOpen && (
                <div className="z-10 origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {secondDropdownItems.map((item, index) => (
                            <div key={index} onClick={() => handleItemClick(item)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
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
