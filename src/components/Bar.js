import React from 'react';

class Bar extends React.Component {

  render() {
    const totalPositives = this.props.totalPositives;
    const totalNegatives = this.props.totalNegatives;
    return (
      <div className="progress bar-size">
        <div className="progress-bar bg-success" role="progressbar" style={{width: totalPositives+"%"}} aria-valuenow={totalPositives} aria-valuemin="0" aria-valuemax={totalPositives}>{totalPositives}</div>
        <div className="progress-bar bg-warning" role="progressbar" style={{width: totalNegatives+"%"}} aria-valuenow={totalNegatives} aria-valuemin="0" aria-valuemax={totalNegatives}>{totalNegatives}</div>
	  	</div>
    )
  }
}

export default Bar
