import React from 'react';
import './style/cardList.css';
import Card from './card';

const CardList = ({ cards, searchTerm, cardTypeFilter, ownerIdFilter }) => {
    console.log('Before filtering:', cards);
    const filteredCards = cards.filter((card) => {
        /*
        console.log('Search Term:', searchTerm);
        console.log('Card Type Filter:', cardTypeFilter);
        console.log('Owner Id Filter:', ownerIdFilter.owner_id);
        console.log('CardOwnerId:', card.owner_id);*/

        const lowerCaseSearchTerm = searchTerm && searchTerm.toLowerCase();
        const matchesSearchTerm = !lowerCaseSearchTerm || card.name.toLowerCase().includes(lowerCaseSearchTerm);
        const matchesCardType = cardTypeFilter.card_type === 'all' || String(card.card_type) === cardTypeFilter.card_type || cardTypeFilter === 'all';
        const matchesOwnerId = ownerIdFilter.owner_id === 'all' || String(card.owner_id) === ownerIdFilter.owner_id || ownerIdFilter === 'all';

        /*
        console.log('After filtering matchesCardType:', matchesCardType);
        console.log('After filtering matchesSearchTerm', matchesSearchTerm);
        console.log('After filtering matchesOwnerId', matchesOwnerId);*/

        return matchesSearchTerm && matchesCardType && matchesOwnerId;

    });

    console.log('After filtering:', filteredCards);

    return (
        <div className="card-list">
            {filteredCards.map((card) => (
                <Card key={`${card.owner_id}-${card.card_id}`} card={card} />
            ))}
        </div>
    );
};

export default CardList;
