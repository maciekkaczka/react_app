import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Artist.css';

function Artist() {
    const url = window.location.href.split('/');
    const author = url.pop();
    const uri = "http://localhost:8080/get/" + author;

    let [paintings, setPaintings] = useState([]);

    let getData = async () => {
        fetch(uri)
            .then(response => response.json())
            .then(result => setPaintings(result))
            .catch(error => console.error('Error fetching data:', error))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        {paintings && paintings.length > 0 && (
        <body>
            <div class="container mt-5">
                <h1 class="text-center mb-4">{paintings[0].artist.name}</h1>
                <div class="row">
                    {paintings.map((painting) => (
                        <div class="col-md-4">
                            <div class="card painting-card">
                                <img src={painting.photo} class="card-img-top" alt={painting.name}/>
                                <div class="card-body">
                                    <h5 class="card-title">{painting.name}</h5>
                                    <p class="card-text mb-1">Place displayed: {painting.place}</p>
                                    <p class="card-text mb-1">Year created: {painting.year}</p>
                                </div>
                            </div>
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