import React, { useState } from 'react';
import './HelpfulButton.scss';

const HelpfulButton = ({helpfulness, id, onHelpulButtonClick}) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleClick = () => {
    if (!hasBeenClicked) {
      onHelpulButtonClick(id);
      setHasBeenClicked(true);
    }
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
