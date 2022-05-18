import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { uiReducer, initState, } from './uiReducer';
import { configure } from 'enzyme';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
configure({ adapter: new Adapter() });
describe('uiReducer', () => {
	const initialState = {
	  isNotificationDrawerVisible: false,
	  isUserLoggedIn: false,
	  user: {}
	};

	test('state does not change when no action is passed', () => {
	  const state = uiReducer(initialState);

	  expect(state).to.equal(initialState);
	});

	test('state does not change when unrelated action is passed', () => {
	  const state = uiReducer(initialState, { action: 'SELECT_COURSE' });

	  expect(state).to.equal(initialState);
	});


});
