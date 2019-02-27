import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header/>
        <Navbar/>
      </div>
    );
  }
}

export default Home;