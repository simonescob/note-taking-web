import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../features/notes/notesSlice'
import themeReducer from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch