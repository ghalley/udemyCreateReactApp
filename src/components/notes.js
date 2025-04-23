import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)
  const { x, y } = useMousePosition()

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }

  return (
    <div>
      <h3>{note.title} - {note.body}</h3>
      <p>Mouse Position: {x}, {y}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

export { Note as default };
