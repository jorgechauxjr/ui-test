import React from 'react'
import thumbsUp from './assets/img/thumbs-up.svg';
import thumbsDown from './assets/img/thumbs-down.svg';
import Eyebrow from './Eyebrow';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			positClick: false,
			negatClick: false,
			showMsg: false,
			voteNow: "btn btn-outline-secondary rounded-0 disabled",
			voted: false,
			voteAgain: false,
			message: "Last updated: {this.props.lastUpdated} in {this.props.category}"
		}
	}	

	enableVoteP =() => {
			// alert("VOTO FAVOR")
			this.setState({voteNow: "btn btn-outline-secondary rounded-0"})
	}
	enableVoteN() {
		// alert("VOTO EN CONTRA")
}


// change the state of eyebrow voted
changeEyebrow = () => {
	if(!this.state.voted) {
		this.setState({voted: true});
		this.setState({voteAgain: true});
	} 
}

	render() {
		const lastUp = this.props.lastUpdated;
		const cate = this.props.category;
		return (
			<div className="card my-card" style={{width: "18rem"}}>
				<div className="card-body kanye_card">
				<img src={this.props.picture} alt="im" className="card-img-top" />
				<h5 className="card-title person__name">{this.props.name}</h5>
				<p className="card-text description">{this.props.description}</p>

				<Eyebrow votedState={this.state.voted} voteAgainSt={this.state.voteAgain} lastUpdated={lastUp} category={cate}/>
				<div className="vote_buttons">
						<button onClick={this.enableVoteP} className="icon-button btn-outline-secondary" aria-label="thumbs up" id="upBtn">
							<img src={thumbsUp} alt="thumbs up"/>
					</button>
					<button onClick={this.enableVoteN} className="icon-button btn-outline-secondary" aria-label="thumbs down" id="downBtn">
						{/* <img src="assets/img/thumbs-down.svg" alt="thumbs down"/> */}
						<img src={thumbsDown} alt="thumbs down"/>
					</button>
					<button onClick={this.changeEyebrow} className={this.state.voteNow}>
						Vote Now
					</button>
				</div>
				<br />
				<div className="progress"> 
					<div className="progress-bar bg-success" role="progressbar" style={{width: this.props.positives+"%"}} aria-valuenow={this.props.positives} aria-valuemin="0" aria-valuemax={this.props.positives}>{this.props.positives}</div>
					<div className="progress-bar bg-warning" role="progressbar" style={{width: this.props.negatives+"%"}} aria-valuenow={this.props.negatives} aria-valuemin="0" aria-valuemax={this.props.negatives}>{this.props.negatives}</div>
				</div>
			</div>
		</div>
		)
	}
  
}


export default Card
