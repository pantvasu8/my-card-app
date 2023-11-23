import React, { useState, useEffect } from 'react';
import NavBar from './components/navBar';
import CardList from './components/cardList';
import FilterButton from './components/filterButton';
import mockApi from './api/mockApi';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [cardTypeFilter, setCardTypeFilter] = useState('all');
  const [ownerIdFilter, setOwnerIDFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data for page:', page);
      const data = await mockApi.fetchData(page, 10); // 10 records per call
      setCards(data.data);
      setPage(data.page + 1);
    };

    fetchData();
  }, [page]);

  const handleSearch = (term) => {
    const filteredCards = cards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the cards state with the filtered cards
    setCards(filteredCards);
    // setSearchTerm(term);
  };

  const handleFilterChange = (filter) => {

    // It's a type filter or cardholder filter
    if (filter.card_type !== undefined) {
      setCardTypeFilter(filter.card_type);
    }

    // Handle cardholder filter if needed
    if (filter.owner_id !== undefined) {
      // Add logic to handle owner_id filter if needed
      // For now, you can set the owner ID filter state or perform any other necessary action
      setOwnerIDFilter(filter.owner_id);
    }

  };

  const handleClearFilters = async () => {
    // Fetch all cards without filters



    const data = await mockApi.fetchData(1, 10);
    setCards(data.data);

    // Reset filter states
    setCardTypeFilter('all');
    setOwnerIDFilter('all');

  };
  console.log('Search Term:', searchTerm);
  console.log('Card Type Filter:', cardTypeFilter);
  console.log('Owner Id Filter:', ownerIdFilter);

  return (
    <div>
      <NavBar />
      <div className="search-and-filter">
        <div className="search-block">
          <input
            type="text"
            placeholder="Search by card name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-symbol" onClick={handleSearch}>
            🔍
          </span>
        </div>
        <FilterButton onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} />
      </div>
      <div className="spacer"></div>
      <CardList cards={cards} searchTerm={searchTerm} cardTypeFilter={cardTypeFilter} ownerIdFilter={ownerIdFilter} />
    </div>
  );
};

export default App;



