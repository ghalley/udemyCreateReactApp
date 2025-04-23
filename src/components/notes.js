import React from 'react';

const Note = ({ note, removeNote}) => {
  return (
    <div>
      <h3>{note.title} - {note.body}</h3>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

export { Note as default };
