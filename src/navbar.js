import 'bootstrap/dist/css/bootstrap.css';
import {useRef} from 'react';
import tyler from './favicon.png'
import './navbar.css'



function NavBar(){
    const message = useRef(null);

    return(
    // <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    //     <div class="container-fluid">
    //         <a class="navbar-brand" href="javascript:void(0)">
    //             <img src={tyler} width="35" height="40" alt=""/>
    //         </a>
    //         <ul class="navbar-nav me-auto">
    //             <li class="nav-item">
    //                 <a class="nav-link" href="/insert">Insert painting</a>
    //             </li>
    //         </ul>
    //         <form class="d-flex">
    //             <input ref={message} class="form-control me-2" type="text" placeholder="Search"/>
    //             <button class="btn btn-primary" type="button" onClick={goToPage}>Search</button>
    //         </form>
    //     </div>
    // </nav> 
    <nav class="navbar navbar-expand-lg navbar-light navbar-paintings">
        <div class="container">
            <a class="navbar-brand" href="#">Paintings Gallery</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/insert">Insert</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/list">List</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input ref={message} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary" type="button" onClick={goToPage}>Search</button>
                </form>
            </div>
        </div>
    </nav>
    )

    function goToPage(){
        document.location.href = "http://localhost:3000/artist/" + message.current.value.replace(" ", "-");
    }
}

export default NavBar;