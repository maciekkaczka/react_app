import 'bootstrap/dist/css/bootstrap.css';
import { useRef } from 'react';
import '../styles/navbar.css'



function NavBar() {
    const message = useRef(null);

    return (
        <body>
            <nav class="navbar navbar-expand-lg navbar-light navbar-paintings">
                <a class="navbar-brand" href="#">Paintings Gallery</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/insert">Insert</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/list">List</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input ref={message} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-primary" type="button" onClick={goToPage}>Search</button>
                    </form>
                </div>

            </nav>
        </body>
    )

    function goToPage() {
        document.location.href = "http://localhost:3000/artist/" + message.current.value;
    }
}

export default NavBar;