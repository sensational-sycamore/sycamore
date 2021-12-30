import React from 'react';
import './AddQuestionModal.scss';

const AddQuestionModal = ({productName}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header>
          <h3>Ask your question</h3>
          <h2>About the {productName}</h2>
        </header>
        <main>

        </main>
        <footer>

        </footer>
      </div>
    </div>
  );
};

export default AddQuestionModal;
