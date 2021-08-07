

import React from 'react'

class Eyebrow extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			votedPressed: false
		}
	}
  
  render() {
    if(!this.props.textState) {
      return (
        <p className="card-text department">Last updated: {this.props.lastUpdated} in {this.props.category}</p>
      )
    } else {
      return (
        <p className="card-text department">Thank you for your vote!</p>
      )
    }
    
  }
}

export default Eyebrow
