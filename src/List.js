import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

function List() {
    const url = window.location.href.split('/');
    const author = url.pop();
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
                <h4>Artists:</h4>
                {artists && artists.length > 0 && (
                    <div>
                        {artists.map((artist) => (
                            <h5>{artist.name}</h5>
                        ))}
                    </div>
                )}
            </div>
        </body>
        </>  
    )
}

export default List;