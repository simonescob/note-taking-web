// types/note.types.ts
export interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  isArchived: boolean
  createdAt: Date
  updatedAt: Date
}

export type NoteFormData = Pick<Note, 'title' | 'content' | 'tags'>