import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './List.css'

function List() {
    const uriArtist = "http://localhost:3000/artist/";
    const uri = "http://localhost:8080/getArtists";

    let [artists, setArtists] = useState([]);

    let getData = async () => {
        fetch(uri)
            .then(response => response.json())
            .then(result => setArtists(result))
            .catch(error => console.error('Error fetching data:', error))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        <body>
            <div class="container mt-5">
                <h2 class="mb-4">Artists:</h2>
                {artists && artists.length > 0 && (
                    <ul class="list-group">
                        {artists.map((artist) => (
                                <a href={uriArtist + artist.name} class="list-group-item text-decoration-none">{artist.name}</a>
                            
                        ))}
                    </ul>
                )}
            </div>
        </body>
        </>  
    )
}

export default List;