import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import SearchPage from './screens/SearchPage';

const BooksApp = () => {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false,
  // };

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </main>
  );
};

export default BooksApp;
