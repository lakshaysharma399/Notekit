import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./app.css"


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      prevNotes.filter((noteItem, index) => {
        return index !== id;

      })
    })

  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}
      />
      {notes.map(noteItem => {
        return <Note title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;


