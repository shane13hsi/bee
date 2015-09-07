import styles from './Navbar.scss';

import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <div className={ styles.navbar }>
        <div className="navbar-container">
          <div className="navbar-header pull-left">
            <a href="#" className="navbar-brand">
              点评人力资源平台
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
