import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        setText('');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        cols="30"
                        rows="10"
                        className="form-control"
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-danger" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>

            <div className="container my-4">
                <h2>Text Summary:</h2>
                <p>
                    <b>Words:</b> {text.split(' ').length} <br /> <b>Characters:</b> {text.length}
                </p>
                <h2>Text Preview:</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
