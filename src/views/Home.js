import "./Home.css";
import { Container } from "reactstrap";
import Footer from "../common/Footer";

function Home() {
	return (
		<>
			<Container>
				<div>
					<img
						className='cover_image'
						src='https://images.unsplash.com/photo-1518051870910-a46e30d9db16?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
					/>
					<h1> Drop chair </h1>
					<h2> The PiNK Leather Edition </h2>
					<p>
						The Drop chair was designed by Arne Jacobsen in 1868 as part of his
						masterpiece the legendary Rockseen Blu Royal Hotel in Copenhagen.
					</p>
					<button
						onClick={() => {
							localStorage.setItem("nume", "Categorii");
						}}>
						Discover now!
					</button>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Home;

// SECTIUNEA DE INTRODUCERE/HOME = va contine h1 cu descrierea produsului/companiei
// p text pt descrierea produsului/companiei
// button care ne va trimite pe pagina de produse
// img imagine de fundal

// pt mobile vom avea doar imaginea si sub imagine textul
