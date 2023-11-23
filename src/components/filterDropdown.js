import React, { useState } from 'react';
import './style/filterDropdown.css';


const FilterDropdown = ({ onFilterChange, onClearFilters }) => {

    const [selectedType, setSelectedType] = useState('');
    const [selectedCardHolder, setSelectedCardHolder] = useState('');


    const handleApplyButtonClick = () => {

        let filters = {};

        if (selectedType) {
            // If at least one checkbox is selected
            filters.card_type = selectedType;
        } else {
            filters.card_type = 'all';
        }

        if (selectedCardHolder) {
            // If a cardholder is selected
            filters.owner_id = selectedCardHolder;
        } else {
            filters.owner_id = 'all';
        }

        onFilterChange(filters);
    };

    const handleClearButtonClick = () => {
        //clearing filters
        setSelectedType('');
        setSelectedCardHolder('');

        // Calling the callback function from the App component to clear filters
        onClearFilters();
        onFilterChange({});
    };

    return (
        <div className="filter-dropdown">
            <div className="dialog-box">
                <div className="dialog-header">Filters</div>

                <div className="dialog-line"></div>

                <div className="dialog-section type-section">
                    <div className="dialog-subheading">Type</div>
                    <div className="type-checkboxes">
                        <label>
                            <input
                                type="radio"
                                value="subscription"
                                name="cardType"
                                onChange={() => setSelectedType('subscription')}
                            />
                            Subscription
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="burner"
                                name="cardType"
                                onChange={() => setSelectedType('burner')}
                            />
                            Burner
                        </label>
                    </div>
                </div>

                <div className="dialog-section">
                    <div className="dialog-subheading">Cardholder</div>
                    <div className="input-section">
                        <select value={selectedCardHolder}
                            onChange={(e) => setSelectedCardHolder(e.target.value)}>
                            <option value="">Select cardholder</option>
                            <option value="1">ID 1</option>
                            <option value="2">ID 2</option>
                        </select>
                    </div>
                </div>

                <div className="dialog-footer">
                    <button className="apply-button" onClick={handleApplyButtonClick}>
                        Apply
                    </button>
                    <button className="clear-button" onClick={handleClearButtonClick}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
