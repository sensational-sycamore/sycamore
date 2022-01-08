import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Overview from './Overview/Overview.jsx';
const Related = React.lazy(() => import('./Related/Related.jsx'));
const QuestionsAndAnswers = React.lazy(() => import('./QuestionsAndAnswers/QuestionsAndAnswers.jsx'));
const RatingsAndReviews = React.lazy(() => import('./RatingsAndReviews/RatingsAndReviews.jsx'));
import './App.scss';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [productId, setProductId] = useState(63613);
  const navigate = useNavigate();

  useEffect(() => {
    // check if there is a query parameter in the URL
    if (window.location.search) {
      const queryParams = new URLSearchParams(window.location.search);
      // check if the query parameters has a value for productId
      if (queryParams.get('productId')) {
        // update the productId state with the productId from the URL
        setProductId(queryParams.get('productId'));
      } else {
        // if no productId on the URL navigate to the productId currently on the productId state
        navigate(`/?productId=${productId}`);
      }
    }
  }, []);

  // update the state productId and update URL with the new productId
  const changeProductId = (productId) => {
    setProductId(productId);
    navigate(`/?productId=${productId}`);
  };

  return (
    <div>
      <Navbar />
      <Overview productId={productId}/>
      <Suspense fallback={<div>Loading...</div>}>
        <Related productId={productId} changeProductId={changeProductId}/>
        <QuestionsAndAnswers productId={productId}/>
        <RatingsAndReviews productId={productId}/>
      </Suspense>
    </div>
  );
};

export default App;
