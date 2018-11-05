import React, { Component } from 'react';
import Notes from './Notes.js';
import NavButton from './NavButton.js';
import './css/style.css';


class EditNote extends Component{
	constructor(props) {
   		super(props);
   		var noteIndex=Notes.getNoteIndexById(this.props.match.params.id);
   		var storedNotes=Notes.getNotes();
   		var note=storedNotes[noteIndex];
		if(note===undefined){
	    	this.state = { 
	    		id:"",
	    		title:"",
	    		descrip:"" 
	    	};
    	}
    	else{
    		this.state={
				id:note.id,
				title:note.data.title,
				descrip:note.data.description,
			};	
    	}
    	this.saveChanges= this.saveChanges.bind(this);
    	this.handleChangeTitle= this.handleChangeTitle.bind(this);
    	this.handleChangeDescrip= this.handleChangeDescrip.bind(this);
  	}
  	handleChangeTitle(event) {
    	this.setState({title: event.target.value});
  	}
  	handleChangeDescrip(event) {
    	this.setState({descrip: event.target.value});
  	}
	saveChanges(){
		if(this.state.title===""){
			this.setState({errors:"Input title!"});
			return;
		}
		this.setState({errors:""});
		Notes.saveChanges(this.state.id,this.state.title,this.state.descrip);
		this.props.history.push("/");

	}
	render(){
		if(this.state.id===""){
			return(
				<div>
					<h1>Note #{this.props.match.params.id} doesn't exist</h1>
					<NavButton name="Back" direct="/"/>
				</div>
			);
		}
		return(
			<div className="formCl">
				<h1>Edit note #{this.state.id}</h1>
				<input placeholder="Title" type="text" value={this.state.title} onChange={this.handleChangeTitle} maxLength='40'/><br/>
				<textarea placehsolder="Description" value={this.state.descrip} onChange={this.handleChangeDescrip}></textarea><br/>
				<div>{this.state.errors}</div>
				<NavButton name="Back" direct="/"/>
				<button className="btn" onClick = {this.saveChanges}>
               		Save
            	</button>
			</div>
		) 
	}
}
export default EditNote;