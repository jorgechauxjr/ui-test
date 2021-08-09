import React from 'react';
import Header from './Header';
import Aside from './Aside'
import Body from './Body';
import Cards from './Cards';
import Footer from'./Footer';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Aside />
        <Body />
        <Cards />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
