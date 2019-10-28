import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menuStatus: 'menu-close'
    }
  }

  handleClick = () => {
    if (this.state.menuStatus === 'menu-close') {
      this.setState({ menuStatus: 'menu-open' })
    } else {
      this.setState({ menuStatus: 'menu-close' })
    }
  }

  render() {
    return (
      <>
        <header>
        <nav>
          <h1 className='logo'>Start Bootstrap</h1>
          <button className='menu-button' onClick={this.handleClick}>MENU</button>
          <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <menu id='menu' className={this.state.menuStatus}>
            <h1 className='menu-list'>SERVICES</h1>
            <h1 className='menu-list'>PORTFOLIO</h1>
            <h1 className='menu-list'>ABOUT</h1>
            <h1 className='menu-list'>TEAM</h1>
            <h1 className='menu-list'>CONTACT</h1>
        </menu>
        </header>
      </>
    );
  }
}

export default App;
