import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { courseReducer, initState, } from './courseReducer';
import { configure } from 'enzyme';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS, } from '../actions/courseActionTypes';
import { fetchCourseSuccess, selectCourse, unSelectCourse,} from '../actions/courseActionCreators';

configure({ adapter: new Adapter() });

describe("Testing the courseReducer", () => {

  let coursesa = [];

  it("Test that the default state returns empty array", () => {
    let expected = courseReducer(undefined, {});
    expect(expected).to.be.an("array");
    expect(expected).to.have.lengthOf(0);
  });

  it("Test that FETCH_COURSE_SUCCESS returns the data passed", () => {
    let action = fetchCourseSuccess();
    let expected = courseReducer(undefined, action);
    action.data.map(course => {
      coursesa.push({...course, isSelected: false});
    });
    expect(expected).to.deep.equal(coursesa);
  });


  it("Test that UNSELECT_COURSE returns the data with the right item ", () => {
    let ns = coursesa;
    let action = unSelectCourse(1);
    let expected = courseReducer(coursesa, action);
    coursesa = [];
    ns.map(course => {
      if (course.id == action.index) {
        coursesa.push({...course, isSelected: true});
      } else {
        coursesa.push(course);
      }
    });
    expect(expected).to.deep.equal(coursesa);
  });

  it("Test that SELECT_COURSE returns the data with the right item ", () => {
    let ns = coursesa;
    let action = selectCourse(1);
    let expected = courseReducer(coursesa, action);
    coursesa = [];
    ns.map(course => {
      if (course.id == action.index) {
        coursesa.push({...course, isSelected: true});
      } else {
        coursesa.push(course);
      }
    });
    expect(expected).to.deep.equal(coursesa);
    coursesa = ns;
  });



});
