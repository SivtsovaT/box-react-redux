/*получает данные из хранилище и выводит*/
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectBooks} from "../store/booksSlice";
import Book from "./Book";

const BooksList = () => {
	const books = useSelector(selectBooks);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				{
					books.map(item => <Book title={item.title}
											price={item.price}
											image={item.image}
											id={item.id}
											key={item.id}
					/>)
				}
			</div>
		</div>
	)
}

export default BooksList;