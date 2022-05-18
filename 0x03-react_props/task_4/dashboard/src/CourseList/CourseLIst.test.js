import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Test CourseList.js', () => {
  it('CourseList without crashing', (done) => {
    expect(shallow(<CourseList />).exists());
    done();
  });

  it('renders 5 diferent rows', (done) => {
    const wrapper = shallow(<CourseList />);
    
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(5);
    done();
  });
});