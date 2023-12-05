import React, {useEffect, useState, useRef, useCallback} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Insert(){
    const info = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const uri  = "https://cors-anywhere.herokuapp.com/http://localhost:8080/insert";

    const handle = useCallback(() => {
        alert("Please fill all fields.");
    });

    return (
        <div class="container-sm">
            <form action="/action_page.php">
            <div class="mb-3 mt-3">
                <label class="form-label">Artist:</label>
                <input ref={info[0]} type="text" class="form-control" placeholder="Enter artist name"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Painting:</label>
                <input ref={info[1]} type="text" class="form-control" placeholder="Enter painting name"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Year:</label>
                <input ref={info[2]} type="text" class="form-control" placeholder="Enter year painted"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Place:</label>
                <input ref={info[3]} type="text" class="form-control" placeholder="Enter place of display"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Photo:</label>
                <input ref={info[4]} type="text" class="form-control" placeholder="Enter photo url"/>
            </div>
            <button type="button" class="btn btn-primary" onClick={sendData}>Submit</button>
            </form>
        </div>
    )

    async function sendData() {
        if(info.every((item) => item.current.value != "")){
            useEffect(() => {
                axios.post(uri, "dupa");
            })
                
        }
        else{
            handle();
        }
}
}

export default Insert;