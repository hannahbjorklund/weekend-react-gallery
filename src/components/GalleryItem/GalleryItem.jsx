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
                <div className='innerBox'>
                    <p data-testid='description'>
                        {item.description}
                    </p>
                </div>
            )
        } else {
            return (
                <div className='innerBox'>
                    <img height={100} width={100} src={`${item.url}`}/>
                </div>
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

    const deleteItem = () => {
        // Make a DELETE request
        if(confirm("Are you sure you want to delete?") == true){
            axios({
                method: 'DELETE',
                url: `/gallery/${item.id}`
            }).then((response) => {
                console.log("DELETE request successful");
                getGalleryItems();
            }).catch((error) => {
                console.log("Error in DELETE:", error);
            })
        }
    }

    return (
        <div data-testid='galleryItem' className='itemBox'>
            <button className='deleteButton' onClick={deleteItem}>✖️</button><h2>{item.title}</h2>
            <div data-testid='toggle' onClick={toggleDescription}>
                {displayDescription()}
            </div>
            <p className='likes'> <button className='likeButton' onClick={likeItem} data-testid='like'>🖤 Like</button>Likes: {item.likes} </p>
        </div>
    )
}

export default GalleryItem;