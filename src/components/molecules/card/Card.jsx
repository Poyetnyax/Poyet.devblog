import React from 'react';
import './Card.css';


const card = ({ period="", field="", place="", description="" }) => {
  return (
    <div className="card">
      <div className="card__header">
        <p>
          <strong className="badge">{period}</strong>
        </p>
      </div>
      <div className="card__body">
        <p className="field">{field}</p>
        <p className="place">{place}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default card;