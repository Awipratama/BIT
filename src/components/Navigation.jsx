import React from "react";

import Logo from '../assets/Logo.png'

function Navigation() {
  return (
    <>
      <nav className="navbar fixed pt-10 pb-4 w-full z-9">
        <div className="flex flex-column w-full justify-around">
          <div className="logo flex items-end gap-4">
              <img src={Logo} alt="main-logo" />
              <h2 className="header-nav text-white">PT BIKIN INOVASI TEKNOLOGI</h2>
          </div>
          <div className="navigation flex items-center">
            <ul className="flex flex-column gap-14 text-white font-bold">
              <li>
                  <a href="" className="active">About</a>
              </li>
              <li>
                  <a href="">Our Works</a>
              </li>
              <li>
                  <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
