import './GalleryItem.css';
import axios from 'axios';
import {useState} from 'react';

function GalleryItem({item, getGalleryItems}){
    let [isToggledDesc, setIsToggledDesc] = useState(false);

    //Toggle the image upon click
    const toggleDescription = () => {
        setIsToggledDesc(!isToggledDesc);
    }

    const displayDescription = () => {
        if(isToggledDesc){
            return (
                <p data-testid='description'>
                    {item.description}
                </p>
            )
        } else {
            return (
                <img height={100} width={100} src={`${item.url}`}/>
            )
        }
    }

    const likeItem = () => {
        // Make a PUT request to update Like count
        axios({
            method: 'PUT',
            url: `/gallery/like/${item.id}`
        }).then((response) => {
            console.log("PUT request successful");
            getGalleryItems();
        }).catch((error) => {
            console.log("Error in PUT:", error);
        })
    }

    return (
        <div data-testid='galleryItem'>
            <p>{item.title}</p>
            <div data-testid='toggle' onClick={toggleDescription}>
                {displayDescription()}
            </div>
            <p>Likes: {item.likes}</p>
            <button onClick={likeItem} data-testid='like'>Like</button>
        </div>
    )
}

export default GalleryItem;