import React from 'react';
import './Card.css';
import { FaGithub } from 'react-icons/fa';

const card = ({ period="", field="", place="", description="", repoUrl="" }) => {
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
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card__link"
          >
            <FaGithub /> View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default card;