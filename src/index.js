import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      { title, body }
    ])
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    setNotes(notes.filter(note => note.title !== title))
  }

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title} - {note.body}</h3>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
      <p>Add Note:</p>
      <form onSubmit={addNote}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button>add note</button>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NoteApp />
);
