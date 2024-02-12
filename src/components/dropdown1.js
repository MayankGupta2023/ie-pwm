import React, { useState } from 'react';

const DropdownButton = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left ">
            <button
                onClick={toggleDropdown}
                type="button"
                className="  inline-flex justify-center items-center w-36  px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-lg font-semibold text-gray-700 hover:bg-gray-50 "
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                style={{ background: '' }}
            >
                {selectedItem ? selectedItem : 'Select Class'}
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div onClick={() => handleItemClick('Item 1')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                            Item 1
                        </div>
                        <div onClick={() => handleItemClick('Item 2')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                            Item 2
                        </div>
                        <div onClick={() => handleItemClick('Item 3')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                            Item 3
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
