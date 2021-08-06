import './App.css';
import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from'./Footer';


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Card />
        <Footer />
        
        {/* <h1>HOLA HOLA</h1>
        <img src="../assets/greta.png" /> */}
      </React.Fragment>
      
    );
  }
}

export default App;
