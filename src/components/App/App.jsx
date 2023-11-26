import React, {useState, useEffect} from 'react';
import GalleryForm from '../GalleryForm/GalleryForm'
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header.jsx';
import axios from 'axios';

function App() {

  let [galleryItems, setGalleryItems] = useState([]);
    
  useEffect(() => {getGalleryItems()}, []);

  const getGalleryItems = () => {
      axios({
          method: 'GET',
          url: '/gallery'
      }).then((response) => {
          console.log("GET request at /gallery");
          setGalleryItems(response.data);
      }).catch((error) => {
          console.log("Error in GET request:", error);
      })
  }

  return (
    <div data-testid='app'>
      <Header/>
      <GalleryForm getGalleryItems={getGalleryItems}/>
      <GalleryList getGalleryItems={getGalleryItems} items={galleryItems}/>
    </div>
  );
}

export default App;
