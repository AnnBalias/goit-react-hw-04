import { useEffect, useState } from 'react';
// import components
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';

// import styles
import './App.css'

const App = () => {


  return (
    <>
      <SearchBar  />
      {false ? <ErrorMessage /> : <ImageGallery arr={[]} />}
      <LoadMoreBtn  />
      {false && <Loader />}
      <ImageModal />
    </>
  );
};

export default App
