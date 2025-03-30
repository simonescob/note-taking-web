// features/theme/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  colorScheme: 'light' | 'dark' | 'system'
  fontFamily: string
}

const initialState: ThemeState = {
  colorScheme: 'system',
  fontFamily: 'sans-serif'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setColorScheme: (state, action) => {
      state.colorScheme = action.payload
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload
    }
  }
})

export const { setColorScheme, setFontFamily } = themeSlice.actions
export default themeSlice.reducer