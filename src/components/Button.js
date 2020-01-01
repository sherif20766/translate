import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
	// reference to context to component class
	static contextType = LanguageContext;

	render() {
		console.log(this.context);
		return <button className="ui primary button">Submit</button>;
	}
}

export default Button;
