// @flow
import React, { Component } from 'react';
import { Link } from 'gatsby';
// import { OutboundLink } from 'gatsby-plugin-gtag'
import Logo from '../../images/logo.png';

import './header.scss';

type Props = {
  onClick?: Function,
};

class Header extends Component<Props> {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={Logo} alt="smoopit-logo" height="100px" width="auto" />
            </Link>
          </div>

          <div className="navbar-item">
            <div className="share">
              <ul>
                <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/animedoctors/"><i class="fab fa-facebook-f"></i></a>
                </li>
              </ul>
            </div>
            <div className="share">
              <ul>
                <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/animedoctors/"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
