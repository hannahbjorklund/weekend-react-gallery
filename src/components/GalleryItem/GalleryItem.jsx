import './GalleryItem.css';
import axios from 'axios';

function GalleryItem({item, getGalleryItems}){

    const likeItem = () => {
        // Make a PUT request
        axios({
            method: 'PUT',
            url: `/gallery/${item.id}`
        }).then((response) => {
            console.log("PUT request successful");
            getGalleryItems();
        }).catch((error) => {
            console.log("Error in PUT:", error);
        })
    }

    return (
        <div data-testid='galleryItem'>
            <div data-testid='toggle'>
                <img height={100} width={100} src={`${item.url}`}/>

            </div>
            {/* <p data-testid='description'> */}

            <button onClick={likeItem} data-testid='like'>Like</button>
        </div>
    )
}

export default GalleryItem;