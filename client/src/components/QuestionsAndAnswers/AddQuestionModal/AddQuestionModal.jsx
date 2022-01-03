import React, { useState, useEffect, useRef } from 'react';
import './AddQuestionModal.scss';
import axios from 'axios';

const AddQuestionModal = ({setShowAddQuestionModal, productId}) => {
  const onCloseModal = () => {
    setShowAddQuestionModal(false);
  };

  const [productName, setProductName] = useState('');
  const [questionLength, setQuestionLength] = useState(0);
  const [nicknameLength, setNicknameLength] = useState(0);
  const [emailLength, setEmailLength] = useState(0);


  const [hasEmptyFieldError, setHasEmptyFieldError] = useState(false);
  const [hasEmptyQuestionError, setHasEmptyQuestionError] = useState(false);
  const [hasEmptyNicknameError, setHasEmptyNicknameError] = useState(false);
  const [hasEmptyEmailError, setHasEmptyEmailError] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const fetchProduct = function() {
    axios.get(`/products/${productId}`)
      .then(response => {
        setProductName(response.data.name);
      })
      .catch(err => console.log(err));
  };

  useEffect(fetchProduct, []);

  const questionRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();

  const handleQuestionInputChange = function() {
    if (questionRef.current.value.length > 1000) {
      questionRef.current.value = questionRef.current.value.slice(0, 1000);
    } else {
      setQuestionLength(questionRef.current.value.length);
    }
  };

  const handleNicknameInputChange = function() {
    if (nicknameRef.current.value.length > 60) {
      nicknameRef.current.value = nicknameRef.current.value.slice(0, 60);
    } else {
      setNicknameLength(nicknameRef.current.value.length);
    }
  };

  const handleEmailInputChange = function() {
    if (emailRef.current.value.length > 60) {
      emailRef.current.value = emailRef.current.value.slice(0, 60);
    } else {
      setEmailLength(emailRef.current.value.length);
    }
  };

  const handleSubmitQuestion = function() {
    // Reset error states
    setHasEmptyFieldError(false);
    setIsEmailInvalid(false);
    setHasApiError(false);
    setHasEmptyQuestionError(false);
    setHasEmptyNicknameError(false);
    setHasEmptyEmailError(false);

    // Get input values
    const question = questionRef.current.value;
    const nickname = nicknameRef.current.value;
    const email = emailRef.current.value;

    // Validate for empty questions
    if (question.length === 0) {
      setHasEmptyQuestionError(true);
    }

    // Validate for empty nickname
    if (nickname.length === 0) {
      setHasEmptyNicknameError(true);
    }

    // Validate for empty email
    if (email.length === 0) {
      setHasEmptyEmailError(true);
    }

    // Validate for empty fields
    if (question.length === 0 || nickname.length === 0 || email.length === 0) {
      setHasEmptyFieldError(true);
    }

    // Validate for valid email
    // https://emailregex.com/
    const validEmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
    if (!email.match(validEmailRegex)) {
      setIsEmailInvalid(true);
    }

    if (!hasEmptyFieldError && !isEmailInvalid) {
      axios.post('/qa/questions', {
        body: question,
        name: nickname,
        email,
        'product_id': productId
      })
        .then(res => {
          onCloseModal();
        })
        .catch(err => {
          console.log('api fetch error');
          setHasApiError(true);
        });
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header>
          <h2>Ask your question</h2>
          <h3>About the {productName}</h3>
          <button className="close-button" onClick={onCloseModal}>x</button>
        </header>
        <main>
          {hasEmptyFieldError && <h4>You must enter the following:</h4>}
          <div>
            {hasEmptyQuestionError && <span>You must enter a question!</span>}
            <label>Your question (mandatory)</label>
            <input ref={questionRef} onChange={handleQuestionInputChange} placeholder="Why did you like the product or not?"/>
            <div className="input-info">
              <span className="char-count">{1000 - questionLength} characters</span>
            </div>
          </div>
          <div>
            {hasEmptyNicknameError && <span>You must enter a nickname!</span>}
            <label>Your your nickname (mandatory)</label>
            <input ref={nicknameRef} onChange={handleNicknameInputChange} placeholder="Example: Fernanda1411"/>
            <div className="input-info">
              <span className="char-count">{60 - nicknameLength} characters</span>
              <span className="disclosure">For privacy reasons, do not use your full name or email address</span>
            </div>
          </div>
          <div>
            {isEmailInvalid && <h4>Please enter a valid email</h4>}
            {hasEmptyEmailError && <span>You must enter a email!</span>}
            <label>Your email (mandatory)</label>
            <input ref={emailRef} onChange={handleEmailInputChange} placeholder="Why did you like the product or not?"/>
            <div className="input-info">
              <span className="char-count">{60 - emailLength} characters</span>
              <span className="disclosure">For authentication reasons, you will not be emailed</span>
            </div>
          </div>
        </main>
        <footer>
          {hasApiError && <h4>Failed to save! Please try again.</h4>}
          <button onClick={handleSubmitQuestion}>Submit question</button>
        </footer>
      </div>
    </div>
  );
};

export default AddQuestionModal;
