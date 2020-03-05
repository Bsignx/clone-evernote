import React from "react";
import SideBarComponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";
import "./App.css";

const firebase = require("firebase");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectednoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return (
      <div className="app-container">
        <SideBarComponent
          selectednoteIndex={this.state.selectednoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        ></SideBarComponent>
        {this.state.selectedNote ? (
          <EditorComponent
            selectedNote={this.state.selectedNote}
            selectednoteIndex={this.state.selectednoteIndex}
            notes={this.state.notes}
            noteUpdate={this.noteUpdate}
          ></EditorComponent>
        ) : null}
      </div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  };

  selectNote = (note, index) =>
    this.setState({ selectednoteIndex: index, selectedNote: note });

  noteUpdate = (id, noteObj) => {
    firebase
     .firestore()
     .collection('notes')
     .doc(id)
     .update({
       title: noteObj.title,
       body: noteObj.body,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     });
  };

  newNote = async (title) => {
    const note = {
      title: title,
      body: ''
    };
  
    const newFromDB = await firebase
      .firestore()
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
    this.setState({ selectedNote: this.state.notes[newNoteIndex], selectednoteIndex: newNoteIndex });
  }

  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    if(this.state.selectednoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
      await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });
    } else {
      this.state.notes.length > 1 ?
      this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectednoteIndex - 1) :
      this.setState({ selectednoteIndex: null, selectedNote: null });
    }

    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  }
}



export default App;
