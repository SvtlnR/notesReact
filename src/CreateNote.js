import React, { Component } from 'react';
import Notes from './Notes.js';
import NavButton from './NavButton.js';
import './css/style.css';

class CreateNote extends Component{
	constructor(props) {
   		super(props)
    	this.state = { 
    		title:"",
    		descrip:"" 
    	};
    	this.add = this.add.bind(this);
    	this.handleChangeTitle= this.handleChangeTitle.bind(this);
    	this.handleChangeDescrip= this.handleChangeDescrip.bind(this);
  	}
  	handleChangeTitle(event) {
    	this.setState({title: event.target.value});
  	}
  	handleChangeDescrip(event) {
    	this.setState({descrip: event.target.value});
  	}
	add(){
		if(this.state.title===""){
			this.setState({errors:"Input title!"});
			return;
		}
		this.setState({errors:""});
		Notes.addNote(this.state.title,this.state.descrip);
		this.props.history.push("/");
	}
	render(){
		return(
			<div className="formCl">
				<h1>Create new note</h1>
				<input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} maxLength='40'/><br/>
				<textarea placeholder="Description" value={this.state.descrip} onChange={this.handleChangeDescrip}></textarea><br/>
				<div>{this.state.errors}</div>
				<div>
				<NavButton name="Back" direct="/"/>
				<button className="btn" onClick = {this.add}>
               		Add
            	</button>
            	</div>
			</div>
		) 
	}
}
export default CreateNote;