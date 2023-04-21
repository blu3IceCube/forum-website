import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid nav-header">
                <a className="navbar-brand" href="/"><span className="h4">postIt</span></a>
                <div className="nav-head">
                    <form class="d-flex ms-2" role="search">
                        <input class="form-control form-search" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <button type="button" class="btn btn-post">
                        <i className="fa-solid fa-plus h5"></i> 
                    </button>
                </div>
            </div>
        </nav>

        // <nav class="navbar bg-body-tertiary">
        //     <div class="container-fluid">
        //         <a class="navbar-brand">Navbar</a>
        //         <form class="d-flex" role="search">
        //         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //         <button class="btn btn-outline-success" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>
    )
}