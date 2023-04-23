import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid nav-header">
                <a className="navbar-brand" href="/"><span className="h4">postIt</span></a>
                <div className="nav-head">
                    <form className="d-flex ms-2" role="search">
                        <input className="form-control form-search" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <button type="button" className="btn btn-post">
                        <i className="fa-solid fa-plus h5"></i> 
                    </button>
                </div>
            </div>
        </nav>

    )
}