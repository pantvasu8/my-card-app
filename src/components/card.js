import React from 'react';
import './style/card.css';

const LineGraph = ({ spentValue, availableToSpendValue }) => {
    const total = spentValue + availableToSpendValue;
    const spentPercentage = (spentValue / total) * 100;
    const availableToSpendPercentage = (availableToSpendValue / total) * 100;

    return (
        <div className="line-graph">
            <div
                className="line-segment green"
                style={{
                    width: `${spentPercentage}%`,
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                }}
            ></div>
            <div
                className="line-segment pink"
                style={{
                    width: `${availableToSpendPercentage}%`,
                    marginLeft: `${spentPercentage}%`,
                    borderTopRightRadius: '5px',
                    borderBottomRightRadius: '5px',
                }}
            ></div>
        </div>
    );
};

const Card = ({ card }) => {
    const { name, budget_name, card_type, spent, available_to_spend, expiry, limit, status, frequency } = card;

    const renderSymbol = () => {
        if (card_type === 'burner') {
            return <span className="symbol">🔥</span>;
        } else if (card_type === 'subscription') {
            return <span className="symbol">🔄</span>;
        }
        return null;
    };

    return (
        <div className={`card ${status === 'active' ? 'active' : 'inactive'}`}>
            <div className="header">
                <h3 className="card-name">{name}</h3>
                {renderSymbol()}
            </div>
            <div className="budget">
                <span className="budget-name">{budget_name}</span>
                <span className="dot">•</span>
                <span className="budget-details">{'Budget'}</span>
            </div>
            <div className="line-graph-container">
                <hr className="horizontal-line" />
                <div className="labels">
                    <span className="label">AMOUNT</span>
                    <span className="label">FREQUENCY</span>
                    <span className="label">EXPIRY</span>
                </div>
                <div className="amount-frequency-expiry">
                    <span className="amount">{limit} {spent.currency}</span>
                    <span className="frequency">{frequency}</span>
                    <span className="expiry">{expiry}</span>
                </div>
            </div>

            <div className="line-graph">
                <LineGraph
                    spentValue={spent.value}
                    availableToSpendValue={available_to_spend.value}
                />
            </div>
            <div className="status">
                <div className="status-item">
                    <div className="dot green"></div>
                    <span className="status-label">Spent</span>
                    <span className="status-value">{spent.value} {spent.currency}</span>
                </div>
                <div className="status-item">
                    <div className="dot pink"></div>
                    <span className="status-label">Balance</span>
                    <span className="status-value">{available_to_spend.value} {available_to_spend.currency}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;

