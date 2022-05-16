import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";

import Produse from "./views/Produse";
import Wishlist from "./views/Wishlist";
import Home from "./views/Home";
import Navbar from "./common/Navbar";

function App() {
	return (
		<div>
			<Router>
				<Navbar />

				<div style={{ marginTop: "100px" }}>
					<Switch>
						<Route path='produse' element={<Produse />} />

						<Route path='/wishlist' element={<Wishlist />} />

						<Route path='/' element={<Home />} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
