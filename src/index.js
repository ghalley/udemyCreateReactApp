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

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('This should only run once')
  }, [])

  useEffect(() => {
    console.log('useEffect called')
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div>
      <p> The current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NoteApp />
);
