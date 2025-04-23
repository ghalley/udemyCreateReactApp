import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }

  return (
    <div>
      <h3>{note.title} - {note.body}</h3>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

export { Note as default };
