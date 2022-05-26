import { useState, useEffect } from "react";
import Products from "../components/Products";
import Search from "../components/Search";

function ProductsPage() {
	const [products, setProducts] = useState(null);

	const getProducts = async () => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/products"
		);
		const productsFromApi = await responseData.json();
		setProducts(productsFromApi);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			<div>
				<h1>Product Categories</h1>
				<Search />
				{products ? <Products products={products} /> : <div>Loading...</div>}
				<Products />
			</div>
		</>
	);
}
export default ProductsPage;

// Pagina de produse va contine in stanga o lista cu categoriile produselor, iar in dreapta o lista cu produsele (componenta creata deja)
// Daca se da click pe o categorie produsele din dreapta vor fi filtrate in functie de categorie
// Daca se cauta ceva in search-ul de sus produsele vor fi filtrate in functie de acel input
// Cele 2 filtre vor functiona in acelasi timp, daca este selectata o categorie, atunci search-ul se va aplica la categoria selectata

// ! va contine atat partea de navigare cat si footer ul
