src/
├── app/
│   └── (Next.js 13+ App Router structure)
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Modal/
│   ├── notes/
│   │   ├── NoteCard/
│   │   ├── NoteForm/
│   │   └── NotesList/
│   └── ui/
│       ├── Layout/
│       └── ThemeProvider/
├── features/
│   ├── notes/
│   │   ├── notesSlice.ts
│   │   ├── notesSelectors.ts
│   │   └── types.ts
│   ├── auth/ (bonus)
│   └── theme/
├── hooks/
│   ├── useKeyboardNavigation.ts
│   └── useFormValidation.ts
├── lib/
│   ├── api/ (API clients)
│   └── utils/
├── store/
│   └── index.ts
├── styles/
│   ├── themes/
│   └── globals.css
├── types/
└── validations/ (Schemas for react-hook-form)