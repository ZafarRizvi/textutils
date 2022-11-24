import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	return (
		<>
			<Navbar title="Textutils" abtText="About" />
			<div className="container my-3">
				<TextForm heading="Enter Text to analyize" />
			</div>
		</>
	);
}

export default App;
