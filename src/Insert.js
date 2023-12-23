import React, {useEffect, useState, useRef, useCallback} from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Insert(){
    const info = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const uri = "http://localhost:8080/insert";

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
            try {
                const response = await fetch(uri, {
                    method: "POST",
                    body: JSON.stringify({
                        "artist": info[0].current.value,
                        "painting": info[1].current.value,
                        "year": info[2].current.value,
                        "place": info[3].current.value,
                        "photo": info[4].current.value
                    }),
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
                if(!response.ok){
                    alert("Something went wrong");
                }
                else{
                    alert("Saved")
                }
            } catch (error) {
                // an error occured
            }
    }
    else{
       handle();
    }   
        
}
}

export default Insert;