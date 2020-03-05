import React, { Component } from 'react';
import styles               from './DropMenu.module.sass';

// DropMenu component
class DropMenu extends Component {

  constructor (props) {
    super( props );
    this.state = {
      isOpen: false,
    };
    this.menuRef = React.createRef();
  }

  openMenu = () => {
    this.setState( {
                     isOpen: true,
                   } );
  };

  closeMenu = () => {
    this.setState( {
                     isOpen: false,
                   } );
  };

  componentDidMount () {
    window.addEventListener( 'click', this.onOutSideClick );
  }

  componentWillUnmount () {
    window.removeEventListener( 'click', this.onOutSideClick );
  }

  onOutSideClick = (e) => {
    console.log( 'onOutSideClick' );
    if (this.state.isOpen && !this.menuRef.current.contains( e.target )) {
      this.closeMenu();
    }
  };

  renderMenu = () => {
    if (this.state.isOpen) {
      return (
        <div className={styles.container}>
          <nav>
            <ul>
              <li>NavItem1</li>
              <li>NavItem2</li>
              <li>NavItem3</li>
              <li>NavItem4</li>
              <li>NavItem5</li>
              <li>NavItem6</li>
            </ul>
          </nav>
          <button onClick={this.closeMenu}>Close menu</button>
        </div>
      );
    }
  };

  render () {

    return (
      <div ref={this.menuRef}>
        <button onClick={this.openMenu}>Open menu</button>
        {
          this.renderMenu()
        }
      </div>
    );
  }

}

export default DropMenu;