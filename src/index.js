import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAEBvdIsnBwsdV-8mVixivd1o_BnEL46lg';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
})

// Create a new component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
