import React, { Component } from 'react'
import { Link } from "react-router-dom";
const NavBar = () => {

    return (
        
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sky-news-logo.png/1200px-Sky-news-logo.png" width="100" height="30" className="d-inline-block align-top" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link mx-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-5"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item mx-5"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
                            <li className="nav-item mx-5"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item mx-5"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item mx-5"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item mx-5"><Link className="nav-link" to="/technology">Technology</Link></li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar