import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Title.style.scss"

const Title: React.FC = () => (
	<Jumbotron className="bg-transparent title">
		<h1 className="text-center title__name">INFO CORONA</h1>
		<p className="text-capitalize text-center title__sub">Info lokal dan global</p>
	</Jumbotron>
)

export default Title;
