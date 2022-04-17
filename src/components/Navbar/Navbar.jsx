import React from 'react'

import logoImg from '../Assets/DridSankalpLogo.jpeg'
import './navbar.css'
import {HiSearch} from 'react-icons/hi'
const Navbar = () => {
  return (
    <>
    

      <nav className="navbar navbar-expand-lg m-0 p-0 navbar-wrapper bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand nav-logo" href="#">
              <img src={logoImg} alt="" />
          </a>
          <button className="navbar-toggler burgur-icon-wrapper" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span   className="navbar-toggler-icon burgur-icon  " />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex nav-ul">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Notes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Quiz</a>
              </li>
              
            
            <form className="d-flex">
             <div className="search-cont d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <HiSearch className='search-icon' />
              </div>
             </form>
            <li className="nav-item">
                <button className="nav-link active btn login-li ">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Navbar