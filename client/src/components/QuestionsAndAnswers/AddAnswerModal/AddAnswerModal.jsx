import React, { useState, useEffect, useRef } from 'react';
import './AddAnswerModal.scss';
import axios from 'axios';

const AddAnswerModal = ({ handleCloseAnswerModal, productId, questionBody, questionId}) => {
  const [productName, setProductName] = useState('');
  const [answerLength, setAnswerLength] = useState(0);
  const [nicknameLength, setNicknameLength] = useState(0);
  const [emailLength, setEmailLength] = useState(0);
  const [hasEmptyAnswerError, setHasEmptyAnswerError] = useState(false);
  const [hasEmptyNicknameError, setHasEmptyNicknameError] = useState(false);
  const [hasEmptyEmailError, setHasEmptyEmailError] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const answerRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();

  const fetchProduct = function() {
    axios.get(`/products/${productId}`)
      .then(response => {
        setProductName(response.data.name);
      })
      .catch(err => console.log(err));
  };

  useEffect(fetchProduct, []);

  const onCloseModal = () => {
    handleCloseAnswerModal(false);
  };

  const handleAnswerInputChange = () => {
    if (answerRef.current.value.length > 1000) {
      answerRef.current.value = answerRef.current.value.slice(0, 1000);
    } else {
      setAnswerLength(answerRef.current.value.length);
    }
  };

  const handleNicknameInputChange = () => {
    if (nicknameRef.current.value.length > 1000) {
      nicknameRef.current.value = nicknameRef.current.value.slice(0, 1000);
    } else {
      setNicknameLength(nicknameRef.current.value.length);
    }
  };

  const handleEmailInputChange = () => {
    if (emailRef.current.value.length > 1000) {
      emailRef.current.value = emailRef.current.value.slice(0, 1000);
    } else {
      setEmailLength(emailRef.current.value.length);
    }
  };

  const handleSubmitAnswer = () => {
    // Reset error states
    setIsEmailInvalid(false);
    setHasApiError(false);
    setHasEmptyAnswerError(false);
    setHasEmptyNicknameError(false);
    setHasEmptyEmailError(false);

    // Get input values
    const answer = answerRef.current.value;
    const nickname = nicknameRef.current.value;
    const email = emailRef.current.value;

    // Validate for empty answers
    if (answer.length === 0) {
      setHasEmptyAnswerError(true);
    }

    // Validate for empty nickname
    if (nickname.length === 0) {
      setHasEmptyNicknameError(true);
    }

    // Validate for empty email
    if (email.length === 0) {
      setHasEmptyEmailError(true);
    }

    // Validate for valid email
    // https://emailregex.com/
    const validEmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
    if (!email.match(validEmailRegex)) {
      setIsEmailInvalid(true);
    }

    if (answer.length > 0 && nickname.length > 0 && email.length > 0 && !isEmailInvalid) {
      // if no errors form is ready to submit data to backend
      // /qa/questions/:question_id/answers
      axios.post(`/qa/questions/${questionId}/answers`, {
        body: answer,
        name: nickname,
        email,
        photos: []
      })
        .then(res => {
          onCloseModal();
        }).catch(err => {
          console.log('api fetch error');
          setHasApiError(true);
        });
      // handleCloseAnswerModal();
    }

  };

  return (
    <div className="modal-answer">
      <div className="modal">
        <header>
          <h2>Submit your Answer!</h2>
          <h3>{productName}: {questionBody}</h3>
          <button className="close-button" onClick={onCloseModal}>x</button>
        </header>
        <main>
          <div>
            {hasEmptyAnswerError || hasEmptyNicknameError || hasEmptyEmailError && <h4>You must enter the following:</h4>}
            {hasEmptyAnswerError && <span>You must enter a answer!</span>}
            <label>Your answer (mandatory)</label>
            <input ref={answerRef} onChange={handleAnswerInputChange}/>
            <div className="input-info">
              <span className="char-count">{1000 - answerLength} characters</span>
            </div>
          </div>

          <div>
            {hasEmptyNicknameError && <span>You must enter a nickname!</span>}
            <label>What is your nickname (mandatory)</label>
            <input ref={nicknameRef} onChange={handleNicknameInputChange} placeholder="Example: Fernanda123!"/>
            <div className="input-info">
              <span className="char-count">{60 - nicknameLength} characters</span>
              <span className="disclosure">For privacy reasons, do not use your full name or email address</span>
            </div>
          </div>

          <div>
            {isEmailInvalid && <h4>Please enter a valid email</h4>}
            {hasEmptyEmailError && <span>You must enter a email!</span>}
            <label>Your email (mandatory)</label>
            <input ref={emailRef} onChange={handleEmailInputChange} placeholder="Example: fernanda@gmail.com"/>
            <div className="input-info">
              <span className="char-count">{60 - emailLength} characters</span>
              <span className="disclosure">For authentication reasons, you will not be emailed</span>
            </div>
          </div>

          <div>
            <label>Upload your photos</label>
            <button>photos</button>
          </div>
        </main>

        <footer>
          {hasApiError && <h4>Failed to save! Please try again.</h4>}
          <button onClick={handleSubmitAnswer}>Submit answer</button>
        </footer>
      </div>
    </div>
  );
};

export default AddAnswerModal;
