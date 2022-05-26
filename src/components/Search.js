import "./Search.css";

function Search() {
	return (
		<div className='container_search'>
			<input type='text' placeholder='Search...' />
			<button>Search</button>
			<button>Clear</button>
		</div>
	);
}

export default Search;
