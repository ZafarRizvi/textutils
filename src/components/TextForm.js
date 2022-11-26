import React, { useState } from "react";

function TextForm(props) {
	const HandleUPC = () => {
		console.log("Uppercase was clicked");
		setText(text.toUpperCase());
	};

	const HandleLOC = () => {
		console.log("Lowercase was clicked");
		setText(text.toLowerCase());
	};

	const HandleClear = () => {
		console.log("Clear was clicked");
		setText("");
	};

	const HandleCAC = () => {
		console.log("Camelcase was clicked");
		setText(text.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()));
	};

	const HandleNSC = () => {
		console.log("Normal Sentence was clicked");
		setText(text.toLowerCase().replace(/(?:^|\.)\S/g, (a) => a.toUpperCase()));
	};

	const [text, setText] = useState("");

	return (
		<>
			<div>
				<h4>{props.heading}</h4>
				<div className="mb-3">
					<textarea
						className="form-control"
						id="myBox"
						value={text}
						rows="5"
						placeholder="Enter text here"
						onChange={(event) => {
							console.log("On change");
							setText(event.target.value);
						}}
					></textarea>
				</div>
				<button className="btn btn-primary m-2" onClick={HandleUPC}>
					Convert to Uppercase
				</button>
				<button className="btn btn-primary m-2" onClick={HandleLOC}>
					Convert to Lowercase
				</button>
				<button className="btn btn-primary m-2" onClick={HandleClear}>
					Clear Text
				</button>
				<button className="btn btn-primary m-2" onClick={HandleCAC}>
					Convert to Camelcase
				</button>
				<button className="btn btn-primary m-2" onClick={HandleNSC}>
					Convert to Normal Sentence
				</button>
			</div>
			<div className="container my-3">
				<h5>Your text summary</h5>
				<p>
					{text.split(" ").length} words and {text.length} characters
				</p>
				<p>
					You can read this in <b>{0.008 * text.split(" ").length}</b> Minutes.
				</p>
				<h5>Preview</h5>
				<p>{text}</p>
			</div>
		</>
	);
}

export default TextForm;
