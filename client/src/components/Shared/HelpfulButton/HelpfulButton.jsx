import React from 'react';
import './HelpfulButton.scss';

const HelpfulButton = ({helpfulness, id, onHelpulButtonClick}) => {

  const handleClick = () => {
    onHelpulButtonClick(id);
  };

  return (
    <div data-testid='helpful-button' className="helpful-button">
      <p data-testid='helpful-title'>Helpful?</p>
      <button data-testid='helpful-yes-button' onClick={handleClick}>Yes</button>
      <p data-testid='helpful-count'>({helpfulness})</p>
    </div>
  );
};

export default HelpfulButton;
