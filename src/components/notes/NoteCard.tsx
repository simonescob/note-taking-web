import React from 'react';
import { Note } from '@/types/note.types';

interface NoteCardProps {
  note: Note;
  onEdit: () => void;
  onDelete: () => void;
  onArchive: () => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete, onArchive }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">{note.content}</p>
      <div className="mt-2">
        {note.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs mr-1">
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={onEdit} className="text-blue-500 hover:underline">Edit</button>
        <button onClick={onDelete} className="text-red-500 hover:underline">Delete</button>
        <button onClick={onArchive} className="text-yellow-500 hover:underline">Archive</button>
      </div>
    </div>
  );
};
 