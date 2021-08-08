

import React from 'react'

class Bar extends React.Component {
 

  render() {
    return (
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: this.props.totalPositives+"%"}} aria-valuenow={this.props.totalPositives} aria-valuemin="0" aria-valuemax={this.props.totalPositives}>{this.props.totalPositives}</div>
        <div className="progress-bar bg-warning" role="progressbar" style={{width: this.props.totalNegatives+"%"}} aria-valuenow={this.props.totalNegatives} aria-valuemin="0" aria-valuemax={this.props.totalNegatives}>{this.props.totalNegatives}</div>
	  	</div>
    )
  }
}

export default Bar
