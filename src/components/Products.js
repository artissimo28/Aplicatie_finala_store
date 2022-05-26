import { Button } from "reactstrap";
import "./Products.css";

function Products({ products }) {
	return (
		<div className='list_products'>
			{products.map((product, index) => {
				return <h3 key={"product_" + index}>{product.title}</h3>;
			})}

			<Button color='primary'>Add to wishlist!</Button>
		</div>
	);
}

export default Products;

// COMPONENTA PRODUS = va contine o imagine cu height 380px, width fullscreen mobile, redimensionabil in functie de unde e pus
// titlul produsului
// pretul produsului
// un buton add to wishlist
