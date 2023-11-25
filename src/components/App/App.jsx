import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header.jsx';

function App() {
    return (
      <div data-testid='app'>
        <Header/>
        <GalleryList/>
      </div>
    );
}

export default App;
