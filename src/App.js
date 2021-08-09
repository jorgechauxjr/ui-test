import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside'
import Body from './components/Body';
import Cards from './components/Cards';
import Footer from'./components/Footer';

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
