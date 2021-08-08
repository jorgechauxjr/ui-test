import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="ruling">Previous Rulings</h2>
          </div>
          <div className="col">
            <div className="dropdown">
              <button className="btn dropdown-toggle btn-outline-secondary rounded-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Grid
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
