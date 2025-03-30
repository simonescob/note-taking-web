import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from '@/types/note.types'

interface NotesState {
  notes: Note[]
  archivedNotes: Note[]
  searchQuery: string
  selectedTags: string[]
}

const initialState: NotesState = {
  notes: [],
  archivedNotes: [],
  searchQuery: '',
  selectedTags: []
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload)
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(n => n.id === action.payload.id)
      if (index !== -1) state.notes[index] = action.payload
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(n => n.id !== action.payload)
    },
    archiveNote: (state, action: PayloadAction<string>) => {
      const note = state.notes.find(n => n.id === action.payload)
      if (note) {
        state.notes = state.notes.filter(n => n.id !== action.payload)
        state.archivedNotes.push({ ...note, isArchived: true })
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    toggleTagFilter: (state, action: PayloadAction<string>) => {
      const tag = action.payload
      if (state.selectedTags.includes(tag)) {
        state.selectedTags = state.selectedTags.filter(t => t !== tag)
      } else {
        state.selectedTags.push(tag)
      }
    }
  }
})

// Selectors
export const selectFilteredNotes = (state: { notes: NotesState }) => {
  const { notes, searchQuery, selectedTags } = state.notes

  return notes.filter(note => {
    const matchesSearch = note.title.includes(searchQuery) || note.content.includes(searchQuery)
    const matchesTags = selectedTags.length === 0 || note.tags.some(tag => selectedTags.includes(tag))
    return matchesSearch && matchesTags
  })
}

export const { addNote, updateNote, deleteNote, archiveNote, setSearchQuery, toggleTagFilter } = notesSlice.actions
export default notesSlice.reducer