import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from "aphrodite";


configure({adapter: new Adapter()});
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

describe('Test CourseList.js', () => {
  it('CourseList without crashing', (done) => {
    expect(shallow(<CourseList />).exists());
    done();
  });

  it('renders 5 diferent rows', (done) => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(5);
    done();
  });
  it('verify that when you pass a list of courses, the component renders it correctly', (done) => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find(CourseListRow).first().html()).to.equal('<tr class="" style="background-color:#f5f5f5ab"><th colSpan="2" class="thFirt_12to336-o_O-thTd_c1hu7a">Available courses</th></tr>');
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(5);
    done();
  });
});
