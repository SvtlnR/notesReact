import React, { Component } from 'react';
import Notes from './Notes.js';
import NavButton from './NavButton.js';
import './css/style.css';

class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			deleted:""
		}
		this.handleRemove= this.handleRemove.bind(this);
	}
	handleRemove(e){
		var id=e.target.value;
		Notes.deleteNote(id);
		this.setState({deleted: id});

	}
	render(){
		var that=this;
		var notes=Notes.getNotes();
		var listNotes = notes.map(function(item) {
	      return (
	      	<tr key={item.id}>
	        <td><NavButton name={item.data.title} direct={`/edit/${item.id}`}/></td>
	        <td><button className="btn" value={item.id} onClick={(e)=>that.handleRemove(e)}>Delete</button></td>
	        </tr>
	      );
	    });
		return(
			<div>
			<NavButton name="Create new note" direct="/create"/>
			<table>
			<tbody>
				{listNotes}
			</tbody>
			</table>
			</div>
		)
	}
}
export default Home;