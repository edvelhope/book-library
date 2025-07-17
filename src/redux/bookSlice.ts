import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { books, type Book } from '../data/books';

const initialState: Book[] = books;

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        aggiungiBook: (state, action: PayloadAction<{ titolo: string, autore: string }>) => {
            state.push({
                id: Date.now().toString(),
                titolo: action.payload.titolo,
                autore: action.payload.autore,
                preferenza: false
            });
        },
        rimuoviBook: (state, action: PayloadAction<string>) => {
            return state.filter(book => book.id !== action.payload);
        },
        togglePreferenza: (state, action: PayloadAction<string>) => {
            const book = state.find(b => b.id === action.payload);
            if (book) {
                book.preferenza = !book.preferenza;
            }
        }
    }
});

export const { aggiungiBook, rimuoviBook, togglePreferenza } = bookSlice.actions;
export default bookSlice.reducer;
