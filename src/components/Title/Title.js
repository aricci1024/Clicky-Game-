import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
	render() {
	  return (
		<header className = "header">
			<h1>Clicky Game!</h1>
			<h2>Click on any image to earn a point, but don't click on it more than once!</h2>
			<h2>Score: {this.props.score}</h2>
		</header>
	  );
	}
  }
export default Title;
