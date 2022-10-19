import {createSlice} from "@reduxjs/toolkit";
import booksArr from '../data/books.json';

export const booksSlice = createSlice({
	name: 'books',
	//это данные кот.лежат в самом начале
	initialState: {
		books: booksArr
	},
	reducers: {

	}
});

export const {} = booksSlice.actions;
export const selectBooks = state => state.books.books;
export default booksSlice.reducer;