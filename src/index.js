import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem('notes')) || []
    setNotes(json)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

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
        <Note
          key={note.title}
          note={note}
          removeNote={removeNote}
        />
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

const Note = ({ note, removeNote}) => {
  useEffect(() => {
    console.log('Setting up effect!')

    return () => {
      console.log('Cleaning up effect!')
    }
  }, [])

  return (
    <div>
      <h3>{note.title} - {note.body}</h3>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NoteApp />
);
