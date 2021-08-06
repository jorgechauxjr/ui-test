import React from 'react';
import thumbsUp from './assets/img/thumbs-up.svg';
import thumbsDown from './assets/img/thumbs-down.svg';
import data from './assets/data.json';

// const newData = data.map((data) => {
// 	return <h1>{data.name}</h1>
// })

function Card() {
	
		return (
			<React.Fragment>
				{console.log(data.data[0].name)}
				{console.log(data.data[0].votes.positive)}
			
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="card" style={{width: "18rem"}}>
						  		<div className="card-body kanye_card">
									<h5 className="card-title person__name">{data.data[0].name}</h5>
									<p className="card-text description">{data.data[0].description}</p>
									<p className="card-text department">1 month ago in Entertainment</p>
									<div className="vote_buttons">
								  		<button className="icon-button" aria-label="thumbs up">
									  		<img src={thumbsUp} alt="thumbs up"/>
										</button>
										<button className="icon-button" aria-label="thumbs down">
											{/* <img src="assets/img/thumbs-down.svg" alt="thumbs down"/> */}
											<img src={thumbsDown} alt="thumbs down"/>
										</button>
										<button className="btn btn-secondary">
											Vote Now
										</button>
									</div>
									<br />
									<div className="progress">
										<div className="progress-bar bg-success" role="progressbar" style={{width: "74.5%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">74.5%</div>
										<div className="progress-bar bg-warning" role="progressbar" style={{width: "25.5%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">25.5%</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
      		</React.Fragment>
    );
  
}

export default Card;
