import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(){

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
        <div data-testid='galleryList'>
            {galleryItems.map((item) => (
                <GalleryItem key={item.id} item={item} getGalleryItems={getGalleryItems}/>
            ))}
        </div>
    )
}

export default GalleryList;