
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
describe("Testing the <App /> Component", () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("<App /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
		});


});
