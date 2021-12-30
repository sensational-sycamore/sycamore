import React, { useEffect } from 'react';
import './AddQuestionModal.scss';

const AddQuestionModal = ({productName, setShowAddQuestionModal}) => {
  const onCloseModal = () => {
    setShowAddQuestionModal(false);
  };

  useEffect(() => {
    // fetch product name
  }, []);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header>
          <h2>Ask your question</h2>
          <h3>About the {productName}</h3>
          <button className="close-button" onClick={onCloseModal}>x</button>
        </header>
        <main>
          <div>
            <label>Your question (mandatory)</label>
            <input placeholder="Why did you like the product or not?"/>
            <div className="input-info">
              <span className="char-count">1000 characters</span>
            </div>
          </div>
          <div>
            <label>Your your nickname (mandatory)</label>
            <input placeholder="Example: Fernanda1411"/>
            <div className="input-info">
              <span className="char-count">60 characters</span>
              <span className="disclosure">For privacy reasons, do not use your full name or email address</span>
            </div>
          </div>
          <div>
            <label>Your email (mandatory)</label>
            <input placeholder="Why did you like the product or not?"/>
            <div className="input-info">
              <span className="char-count">60 characters</span>
              <span className="disclosure">For authentication reasons, you will not be emailed</span>
            </div>
          </div>
        </main>
        <footer>
          <button>Submit question</button>
        </footer>
      </div>
    </div>
  );
};

export default AddQuestionModal;
