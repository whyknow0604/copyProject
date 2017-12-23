import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = (props) => {
    
	let classes = (props.favorite ===1 )? 'favorite active' : 'favorite';
	
        return (
			<div>
				<div className="list">
					<div className="card">
						<div className="thums">
							<div className="img"></div>
							<div className="icon"></div>
						</div>
						<div className="info">
							<h3>{props.name}</h3>
							<span className="cpname">{props.recruit}</span>
							<div className="money">
								{props.rebate.toLocaleString()}원
							</div>
						</div>
						<div className="good">
							<div className="recom">
								{(props.recommendation > 0) && <span>{props.recommendation} 명 추천</span>}
							</div>
							<div className={classes}></div>
						</div>
					</div>	
				</div>
			</div>
    	)
    }


export default Card;