import 'bootstrap/dist/css/bootstrap.css';
import {useRef} from 'react';
import tyler from './favicon.png'



function NavBar(){
    const message = useRef(null);

    return(
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">
                <img src={tyler} width="35" height="40" alt=""/>
            </a>
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/insert">Insert painting</a>
                </li>
            </ul>
            <form class="d-flex">
                <input ref={message} class="form-control me-2" type="text" placeholder="Search"/>
                <button class="btn btn-primary" type="button" onClick={goToPage}>Search</button>
            </form>
        </div>
    </nav> 
    )

    function goToPage(){
        document.location.href = "http://localhost:3000/artist/" + message.current.value.replace(" ", "-");
    }
}

export default NavBar;