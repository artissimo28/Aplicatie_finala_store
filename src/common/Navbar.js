import "./Navbar.css";
import {
	Navbar as NavbarBootstrap,
	NavbarBrand,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
} from "reactstrap";
import { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className='container_navbar'></div>;
			<NavbarBootstrap color='light' container='md' expand='md' fixed='top'>
				<NavbarBrand>Outstock</NavbarBrand>
				<NavbarToggler
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				/>
				<Collapse navbar isOpen={isOpen}>
					<Nav className='me-auto' navbar>
						<NavItem>
							<NavLink href='/'>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/produse'>Produse</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/wishlist'>Wishlist</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</NavbarBootstrap>
		</>
	);
}

export default Navbar;
