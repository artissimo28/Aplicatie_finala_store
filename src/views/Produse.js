function Produse() {
	const nume = localStorage.getItem("nume");
	// const [newObj, setNewObj] = useState(object)
	return <h1> PAGINA PRODUSE - {nume}</h1>;
}

export default Produse;
