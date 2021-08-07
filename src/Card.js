import React from 'react'
import thumbsUp from './assets/img/thumbs-up.svg';
import thumbsDown from './assets/img/thumbs-down.svg';


function Card({name, description, picture, lastUpdated, category, positives, negatives}) {
  
  return (
    <div className="card" style={{width: "18rem"}}>
			<div className="card-body kanye_card">
			<img src={picture} alt="im" className="card-img-top" />
			<h5 className="card-title person__name">{name}</h5>
			<p className="card-text description">{description}</p>
			<p className="card-text department">Last updated: {lastUpdated} in {category}</p>
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
				<div className="progress-bar bg-success" role="progressbar" style={{width: positives+"%"}} aria-valuenow={positives} aria-valuemin="0" aria-valuemax={positives}>{positives}</div>
				<div className="progress-bar bg-warning" role="progressbar" style={{width: negatives+"%"}} aria-valuenow={negatives} aria-valuemin="0" aria-valuemax={negatives}>{negatives}</div>
			</div>
		</div>
	</div>
  )
}


export default Card
