import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList({items, getGalleryItems}){
    return (
        <div data-testid='galleryList' className='container'>
            {items.map((item) => (
                <GalleryItem key={item.id} item={item} getGalleryItems={getGalleryItems}/>
            ))}
        </div>
    )
}

export default GalleryList;