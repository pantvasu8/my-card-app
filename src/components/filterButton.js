import React, { useState } from 'react';
import FilterDropdown from './filterDropdown';

const FilterButton = ({ onFilterChange, onClearFilters }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleButtonClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleFilterChange = (filter) => {
        const filterObject = {
            card_type: filter,
            owner_id: filter,
        };
        onFilterChange(filterObject);
        setDropdownOpen(false);
    };

    const handleClearFilters = () => {
        onClearFilters();
        setDropdownOpen(false);
    };

    return (
        <div className="filter-button-container">
            <button className="filter-button" onClick={handleButtonClick}>
                <span className="filter-icon">≡</span> Filter
            </button>
            {isDropdownOpen && <FilterDropdown onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} />}
        </div>
    );
};

export default FilterButton;


