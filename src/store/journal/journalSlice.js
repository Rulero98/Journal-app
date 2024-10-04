import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    savedMessage: '',
    notes: [],
    activeNote: null,
  },
  reducers: {

    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload
      state.savedMessage = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.savedMessage = ''
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })

      state.savedMessage = `${action.payload.title}, Updated succesfully`

    },
    deleteNoteById: (state, action) => {
      state.activeNote = null
      state.notes = state.notes.filter(note => note.id !== action.payload)
    },
    setPhotosToActiveNote: (state, action) => {
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload]
      state.isSaving = false
    },
    clearNotesLogput: (state) => {
      state.isSaving = false,
        state.savedMessage = '',
        state.notes = [],
        state.activeNote = null
    }
  },

});
export const {
  savingNewNote,
  addNewEmptyNote,
  clearNotesLogput,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;