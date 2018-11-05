import React,{Component} from "react";
import { Switch, Route } from 'react-router-dom'
import './css/style.css';
import Home from './Home.js';
import CreateNote from './CreateNote.js';
import EditNote from './EditNote.js';

class Content extends Component{
	render(){
		return(
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/home" component={Home}/>
					<Route path="/create" component={CreateNote}/>
					<Route exact path="/edit/:id" component={EditNote}/>
				</Switch>
			</main>
		);
	}
}


export default Content;