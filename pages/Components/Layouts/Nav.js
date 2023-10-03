//1. Import Area
import React from 'react'


//2. Defination Area
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Jusdial</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse nav justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav text-right">
                  <a className="nav-link " aria-current="page" href="#">We are Hiring</a>
                  <a className="nav-link" href="#">Investor Relations</a>
                  <a className="nav-link" href="#">Advertise</a>
                  <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Free Listing</a>
                </div>
              </div>
            </div>
          </nav>
    )
}
//3. export Area
//3.1 default export area
export default  Nav;