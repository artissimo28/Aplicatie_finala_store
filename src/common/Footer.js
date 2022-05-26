import { NavLink } from "reactstrap";
import "./Footer.css";
function Footer() {
	return (
		<>
			<div className='footer_container mx-auto'>
				<img
					className='logo_footer'
					src='https://th.bing.com/th/id/R.7834c580b8ea71c48e64e5456eb973e1?rik=I2wDmgpChJowBQ&riu=http%3a%2f%2flogoness.com%2fwp-content%2fuploads%2f2013%2f06%2fpink-logo.jpg&ehk=WE%2fbzUwA9d5WjpdKQFNDOGvMTrB3rFyZ%2bYdSn9JgOHo%3d&risl=&pid=ImgRaw&r=0'
				/>
				<div className='util_links'>
					<NavLink href='/'>Home</NavLink>
					<NavLink href='/produse'>Produse</NavLink>
					<NavLink href='/wishlist'>Wishlist</NavLink>
				</div>
			</div>
		</>
	);
}

export default Footer;

// COMPONENTA FOOTER = va contine link uri utile home, produse
// butoane cu iconite de social media

// pt mobile sectiunea de social media va trece sub sectiunea de link uri si descriere
