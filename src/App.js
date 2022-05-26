import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";

import ProductsPage from "./views/ProductsPage";
import Wishlist from "./Wishlist/Wishlist";
import Home from "./views/Home";
import Navbar from "./common/Navbar";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<div style={{ marginTop: "100px" }}>
					<Switch>
						<Route path='produse' element={<ProductsPage />} />

						<Route path='/wishlist' element={<Wishlist />} />

						<Route path='/' element={<Home />} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
