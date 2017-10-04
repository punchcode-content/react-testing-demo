import React, { Component } from 'react';

class TextBox extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    onTextChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    charCount() {
        const charLen = this.state.text.length;
        if (charLen == 1) {
            return "1 character";
        } else {
            return `${charLen} characters`;
        }
    }

    render() {
        return (
        <div className="text-box">
            <div className="text-box-char-count">{this.charCount()}</div>
            <textarea onChange={this.onTextChange} value={this.state.text}>
            </textarea>
        </div>
        );
    }
}

export default TextBox;