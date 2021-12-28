import React from 'react';
import './HelpfulButton.scss';

const HelpfulButton = ({helpfulness, id, onHelpulButtonClick}) => {

  const handleClick = () => {
    onHelpulButtonClick(id);
  };

  return (
    <div className="helpful-button">
      <p>Helpful?</p>
      <button onClick={handleClick}>Yes</button>
      <p>({helpfulness})</p>
    </div>
  );
};

export default HelpfulButton;