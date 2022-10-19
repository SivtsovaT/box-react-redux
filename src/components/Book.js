import React from "react";

const Book = ({title, price, image}) => {
	return (
		<div>
			<img src={image} alt="image"/>
			<p>{title}</p>
			<p>{price} UAH</p>
			<button>Add product</button>
		</div>
	)
}
export default Book;