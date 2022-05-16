import { Container, Row } from "reactstrap";
function Home() {
	return (
		<Container>
			<Row>
				<h1> Drop chair </h1>
				<h2> The Black Leather Edition </h2>
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
			</Row>
		</Container>
	);
}
export default Home;
