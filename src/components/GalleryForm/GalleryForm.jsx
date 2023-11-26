import axios from 'axios';
import {useState} from 'react';
import './GalleryForm.css';

function GalleryForm({getGalleryItems}){

    // Title
    let [postTitle, setPostTitle] = useState('');
    // URL
    let [postURL, setPostURL] = useState('');
    // Description
    let [postDesc, setPostDesc] = useState('');

    // Send new post data to the server
    const addPost = (evt) => {
        evt.preventDefault();
        let newPost = {
            title: postTitle,
            url: postURL,
            description: postDesc
        };

        axios({
            method: 'POST',
            url: '/gallery',
            data: newPost
        }).then((response) => {
            console.log("POST request at /gallery");
            getGalleryItems();
        }).catch((error) => {
            console.log("POST failed:", error);
        })
    }

    return(
        <form onSubmit={addPost}>
            <label>Post title</label>
            <input
            type="text"
            value = {postTitle}
            onChange = {(evt) => setPostTitle(evt.target.value)}
            />
            <label>Post description</label>
            <input
            type="text"
            value = {postDesc}
            onChange = {(evt) => setPostDesc(evt.target.value)}
            />
            <label>Image URL</label>
            <input
            type="text"
            value = {postURL}
            onChange = {(evt) => setPostURL(evt.target.value)}
            />
            <button className="submitButton" type="submit"> Add </button>
        </form>
    )
}

export default GalleryForm;