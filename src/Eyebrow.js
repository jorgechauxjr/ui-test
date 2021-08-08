

import React from 'react'

class Eyebrow extends React.Component {
  /*
  constructor(props) {
		super(props);
		this.state = {
			votedPressed: false
		}
	}
  */

  render() {
    const voted = this.props.votedState;
    const voteAgain = this.props.voteAgainSt;
    if((!voted)) {
      return (
        <p className="card-text department">Last updated: {this.props.lastUpdated} in {this.props.category}</p>
      )
    } else if ((voted)) {
      // Gracias por su voto y habilitar opcion votar de nuevo
      return <p className="card-text department">Thank you for your vote!</p>
      
    } 
    return (
      <p className="card-text department">Last updated: {this.props.lastUpdated} in {this.props.category}</p>
    )
    
    
    /*else {
      console.log("voted==", voted);
      console.log("voteAgain==", voteAgain);
      return (
      )
    }*/
    
  }
}

export default Eyebrow
