import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, } from 'enzyme';
import { StyleSheetTestUtils, } from 'aphrodite';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes.js';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators.js';

configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();

describe('Test actions', () => {
	it('Test Login', () => {
	  expect(login('vivi@gmail.com', '123')).toEqual({ type: 'LOGIN', user: {email: 'vivi@gmail.com', password:'123'} });
	});

	it('Test Logout', () => {
	  expect(logout()).toEqual({ type: 'LOGOUT' });
	});

	it('Test displayNotificationDrawer', () => {
	  expect(displayNotificationDrawer()).toEqual({ type: 'DISPLAY_NOTIFICATION_DRAWER' });
	});

	it('Test hideNotificationDrawer', () => {
	  expect(hideNotificationDrawer()).toEqual({ type: 'HIDE_NOTIFICATION_DRAWER' });
	});
  });
