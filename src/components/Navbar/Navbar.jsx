import './index.scss'
import React from 'react';

const Navbar = (props) => {
  return (
    <div className="">
      <div className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">
              <span className="primary-color">adult</span>
              <span className="secondary-color">work.com</span>
              <span className="subtext-color">|react</span>
            </a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="index.html">SEARCH</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">MY ACCOUNT
                  <b className="caret"></b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {props.children}
      </div>
  )
}


export default Navbar;
