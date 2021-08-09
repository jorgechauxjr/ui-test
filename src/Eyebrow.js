import React from 'react'

class Eyebrow extends React.Component {

  render() {
    
    const voted = this.props.votedState;

    if((!voted)) {
      return (
        <p className="card-text department">Last updated: {this.props.lastUpdated} in {this.props.category}</p>
      )
    } else  {
      return <p className="card-text department">Thank you for your vote!</p>
    } 
  }
}

export default Eyebrow
