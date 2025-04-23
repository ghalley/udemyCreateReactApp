import React from 'react';

import Note from './notes';

const NoteList = ({ notes, removeNote }) => {
  return notes.map((note) => (
    <Note
      key={note.title}
      note={note}
      removeNote={removeNote}
    />
  ))
}

export { NoteList as default };
