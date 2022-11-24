import React, { useState } from "react";

function TextForm(props) {
	const HandleUPC = () => {
		console.log("Uppercase was clicked");
		setText(text.toUpperCase());
	};

	const [text, setText] = useState("enter text here");

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
						onChange={(event) => {
							console.log("On change");
							setText(event.target.value);
						}}
					></textarea>
				</div>
				<button className="btn btn-primary" onClick={HandleUPC}>
					Convert to Uppercase
				</button>
			</div>
			<div className="container my-3">
				<h2>Your text summary</h2>
				<p>
					{text.split(" ").length} words and {text.length} characters
				</p>
				<p>
					You can read this in <b>{0.008 * text.split(" ").length}</b> Minutes.
				</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}

export default TextForm;
