import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Header></Header>
          {this.props.children}
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
