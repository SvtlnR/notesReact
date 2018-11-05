import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/style.css';


class NavButton extends Component{
	render(){
		return(
			<div>
				<button className="btn"><Link to={this.props.direct}>{this.props.name}</Link></button>
			</div>	
		)
	}
}
export default NavButton;