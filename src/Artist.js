import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Artist.css';

function Artist() {
    const url = window.location.href.split('/');
    const author = url.pop();
    const uri = "http://localhost:8080/get/" + author;

    let [artist, setArtist] = useState([]);

    let getData = async () => {
        fetch(uri)
            .then(response => response.json())
            .then(result => setArtist(result))
            .catch(error => console.error('Error fetching data:', error))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        {artist?.paintings && (
        <body>
            <div class="container mt-3 text-center">
                <img src={artist.photo} class="rounded-circle" style={{height:'300px'}}></img>
                <h1>{artist.name}</h1>
            </div>
            <div class="container p-5 my-5 border">
                <div class="row">
                    {artist.paintings.map((image) => (
                        <div class="col">
                            <img src={image.photo} class="img-fluid"/>
                            {image.name}
                        </div>
                    ))}
                </div>
            </div>
        </body>
        )}
        </>  
    )
}

export default Artist;