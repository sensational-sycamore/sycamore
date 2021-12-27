import React from 'react';
import './HelpfullButton.scss';

const HelpfullButton = ({helpfulness, id}) => {
  return (
    <div className="helpfull-button">
      <p>Helpful?</p>
      <button>Yes</button>
      <p>({helpfulness})</p>
    </div>
  );
};

export default HelpfullButton;