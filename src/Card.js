import React from 'react'
import thumbsUp from './assets/img/thumbs-up.svg';
import thumbsDown from './assets/img/thumbs-down.svg';
import Eyebrow from './Eyebrow';
import Bar from './Bar';


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			positClick: false,
			negatClick: false,
			voteNow: "btn btn-outline-secondary rounded-0 disabled",
			voted: false,
			voteMsg: "Vote Now",
			positVotes: this.props.positives,
			negVotes: this.props.negatives
		}
	}	
	
	enableVoteP =() => {
		this.setState({positClick: true})
		this.setState({voteNow: "btn btn-outline-secondary rounded-0"})
	}

	enableVoteN = () => {
		this.setState({negatClick: true})
		this.setState({voteNow: "btn btn-outline-secondary rounded-0"});
}

changes = () => {
	
	if (this.state.positClick) {
		this.setState({positVotes: this.state.positVotes + 1});
		this.setState({positClick: false})

	} else {
		this.setState({negVotes: this.state.negVotes + 1});
		this.setState({negatClick: false})
	}

	if(!this.state.voted) {
		this.setState({voted: true});
		this.setState({voteMsg: "Vote aAgain"});
	} else {
		this.setState({voted: false});
		this.setState({voteNow: "btn btn-outline-secondary rounded-0 disabled"});
		this.setState({voteMsg: "Vote Now"});
	}	
}

	render() {
		const lastUp = this.props.lastUpdated;
		const cate = this.props.category;
		return (
			<div className="card my-card" style={{width: "18rem"}}>
				<div className="card-body">
				<img src={this.props.cImage} alt="im" className="card-img-top" />
				<h5 className="card-title person__name">{this.props.name}</h5>
				<p className="card-text person__desc">{this.props.description}</p>

				<Eyebrow votedState={this.state.voted} voteAgainSt={this.state.voteAgain} lastUpdated={lastUp} category={cate}/>
				<div className="vote_buttons">
						<button onClick={this.enableVoteP} className="icon-button btn-outline-secondary" aria-label="thumbs up" id="upBtn">
							<img src={thumbsUp} alt="thumbs up"/>
					</button>
					<button onClick={this.enableVoteN} className="icon-button btn-outline-secondary" aria-label="thumbs down" id="downBtn">
						<img src={thumbsDown} alt="thumbs down"/>
					</button>
					
					<button onClick={this.changes} className={this.state.voteNow}>
						{this.state.voteMsg}
					</button>
				</div>
				<br />
				<Bar totalPositives={this.state.positVotes} totalNegatives={this.state.negVotes}/>
			</div>
		</div>
		)
	}
}

export default Card
