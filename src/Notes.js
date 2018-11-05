class Notes{
	static storedNotes=[];
	static lastNoteId=0;
	static getNotes(){
		if (localStorage.getItem('notes')) {
	      this.storedNotes = JSON.parse(localStorage.getItem('notes'));
	    }
	    return this.storedNotes;
	}
	static getLastId(){
		this.getNotes();
		this.lastNoteId=(this.storedNotes.length>0)?this.storedNotes[this.storedNotes.length - 1]["id"]:0;
	}
	 static addNote(title, description){
	 	this.getNotes();
	 	this.getLastId();
	 	this.lastNoteId++;
	 	this.storedNotes.push({
	 		id:this.lastNoteId,
	 		data:{
	 			title:title,
	 			description:description	
	 		}

	 	});
    	this.syncStorage();
	 }
	 static getNoteIndexById(id){
	 	var storedNotes=this.getNotes();
	 	for (var i = 0; i < storedNotes.length; i++) {
	      if (storedNotes[i].id === Number(id)) {
	        return i;
	      }
	    }
	    return undefined;
	 }
	 static saveChanges(id,title,description){
	 	var noteIndex=this.getNoteIndexById(id);
	 	var storedNotes=this.getNotes();
	 	var note=storedNotes[noteIndex];
	 	if(note!==undefined){
	 		note.data.title=title;
	 		note.data.description=description;
			this.syncStorage();
	 	}
	 }
	 static deleteNote(id){
	 	console.log("deleteNote"+id);
	 	var noteIndex=this.getNoteIndexById(id);
	 	if(noteIndex!==undefined){
	 		this.storedNotes.splice(noteIndex, 1);
			this.syncStorage();
	 	}
	 }
	 static syncStorage() {
	 	localStorage.setItem("notes", JSON.stringify(this.storedNotes));
  	}
 }

export default Notes;