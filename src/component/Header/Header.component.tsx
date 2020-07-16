import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Header.style.scss";


const Header: React.FC = () => (
	<Navbar className="header">
		<Container className="d-flex justify-content-between align-content-center">
			<Navbar.Brand className="nav navbar-brand">
				Covid-19 Info
			</Navbar.Brand>
			<Nav className="justify-content-between align-content-center header__nav ">
				<Nav.Item className="nav-item">
					<Nav.Link href="/">Dasboard</Nav.Link>
				</Nav.Item>
				<Nav.Item className="nav-item nav-item--bd">
					<Nav.Link href="mailto:afwani321@gmail.com">Contact</Nav.Link>
				</Nav.Item>
				<Nav.Item className="nav-item nav-item--bd">
					<Nav.Link href="https://github.com/afwani-git">About Me</Nav.Link>
				</Nav.Item>
			</Nav>
		</Container>
	</Navbar>
)


export default Header;
