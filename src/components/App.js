import React from "react";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class App extends React.Component {
	state = { language: "english" };

	onLanguageChange = language => {
		this.setState({ language: language });
	};

	render() {
		return (
			<div className="ui container">
				<LanguageSelector onLanguageChange={this.onLanguageChange} />
				<ColourContext.Provider value="red">
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColourContext.Provider>
			</div>
		);
	}
}

export default App;
