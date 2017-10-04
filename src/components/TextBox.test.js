import '../testSetup';

import React from "react";
import TextBox from "./TextBox";
import { shallow, render, mount } from "enzyme";

it('should start with 0 characters', () => {
    const textBox = shallow(<TextBox />);
    const charCount = textBox.find(".text-box-char-count");
    expect(charCount.text()).toEqual("0 characters");
});

it('should change character count when text is entered', (done) => {
    const textBox = shallow(<TextBox />);
    textBox.setState({text: "Sample text"}, () => {
        expect(textBox.state('text').length).toBe(11);
        textBox.update();
        const charCount = textBox.find(".text-box-char-count");
        expect(charCount.text()).toEqual("11 characters");
        done();
    });
})

it ('should not say 1 characters', (done) => {
    const textBox = shallow(<TextBox />);
    textBox.setState({text: "T"}, () => {
        textBox.update();
        const charCount = textBox.find(".text-box-char-count");
        expect(charCount.text()).toEqual("1 character");
        done();
    });
})