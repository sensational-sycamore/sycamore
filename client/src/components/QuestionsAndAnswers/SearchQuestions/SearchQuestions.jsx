import React, {useRef} from 'react';
import './SearchQuestions.scss';

const SearchQuestions = ({setSearchQuery}) => {
  const searchRef = useRef();

  const handleOnChangeSeachQuery = () => {
    setSearchQuery(searchRef.current.value);
  };

  return (
    <div className="search-question">
      <input data-testid='search-input' ref={searchRef} onChange={handleOnChangeSeachQuery} type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
    </div>
  );
};

export default SearchQuestions;

