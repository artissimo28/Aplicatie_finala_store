import { useState } from "react";
import { Container, Row, Button } from "reactstrap";
import "./Wishlist.css";

function Wishlist() {
	const [products, setProducts] = useState([
		{ title: "prima postare salvata", id: 1 },
		{ title: "postarea 2", id: 2 },
	]);

	return (
		<>
			<Container>
				<Row>
					{}
					<div className='table_row'>
						<h3>{postMessage.title}</h3>
						<Button color='danger'>Sterge</Button>
					</div>
				</Row>
			</Container>
		</>
	);
}

export default Wishlist;

// WISHLIST = pt aceasta pagina datele se vor adauga intr-un array in localStorage si vor fi salvate pe browser
// va contine: Imagine cu cuvantul wishlist
// Tabel cu - numele produsului, pret, buton delete pentru fiecare element

// Va contine atat partea de navigare dar si componenta de footer sub tabelul de produse dorite
