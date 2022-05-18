import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

configure({adapter: new Adapter()});
describe("Testing the <Notifications /> Component", () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Notifications />);
	});


	it("<NotificationItem /> render the correct HTML, by passing type and value props", () => {

		let props = {
			type: "default",
			value: "New resume",
			html: undefined
		}
		
		let component = shallow(<NotificationItem {...props} />);

		console.log(component);
		expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={undefined}>New resume</li>)).to.equal(true);
	});



	it("<Notifications /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});


	it("<Notifications /> render the text 'Here is the list of notifications'", () => {
		expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
	});

});
it("<NotificationItem /> render the correct HTML, by passing dummy html props", () => {
	let props = {
		type: "urgent",
		html: { __html: "<p>test</p>"},
	}
	let component = shallow(<NotificationItem {...props} />);
	expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={props.html} />)).to.equal(true);
});

