import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
	// reference of context to component class
	static contextType = LanguageContext;

	render() {
		const text = this.context === "english" ? "Submit" : "Voorlegen";
		return <button className="ui primary button">{text}</button>;
	}
}

export default Button;
