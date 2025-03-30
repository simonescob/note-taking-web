"use client";

import { NoteForm } from '../components/notes/NoteForm';
import { NoteCard } from '../components/notes/NoteCard';
// import { useAppSelector, useAppDispatch } from '@/store';
import { useState } from 'react';
import { addNote, deleteNote, archiveNote, selectFilteredNotes, setSearchQuery, toggleTagFilter } from '@/features/notes/notesSlice';
import { useAppSelector } from "@/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { Note } from "@/types/note.types";

export default function Home() {
  const dispatch = useDispatch();
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const notes = useAppSelector(selectFilteredNotes);
  const [searchQuery, setSearchQueryState] = useState('');

  const handleAddOrUpdateNote = (data: any) => {
    if (editingNote) {
      // Update note logic
    } else {
      dispatch(addNote({ ...data, id: crypto.randomUUID(), createdAt: new Date() }));
    }
    setEditingNote(null);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 border-r">
        <h2 className="text-lg font-bold">All Notes</h2>
        <button className="bg-blue-500 text-white p-2 rounded">+ Create New Note</button>
        <h3 className="mt-4">Tags</h3>
        <div className="flex flex-col">
          {['Cooking', 'Dev', 'Fitness', 'Health', 'Personal', 'React', 'Recipes', 'Shopping', 'Travel', 'TypeScript'].map(tag => (
            <button
              key={tag}
              onClick={() => dispatch(toggleTagFilter(tag))}
              className="text-left p-2 hover:bg-gray-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <input
          type="text"
          placeholder="Search by title, content, or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQueryState(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(notes as Note[]).map((note: Note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={() => setEditingNote(note.id)}
              onDelete={() => dispatch(deleteNote(note.id))}
              onArchive={() => dispatch(archiveNote(note.id))}
            />
          ))}
        </div>

        {/* Note Form */}
        <NoteForm 
          onSubmit={handleAddOrUpdateNote}
          initialData={editingNote ? notes.find(n => n.id === editingNote) : undefined}
          onCancel={() => setEditingNote(null)}
        />
      </main>
    </div>
  );
}
