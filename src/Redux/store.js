import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { combineReducers } from 'redux';
import { studentsListReducer } from './Reducers/StudentReducers';
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducers';
import { EnrollmentListReducer } from './Reducers/EnrollmentReducers';
import { CourseDetailsReducer, CourseListReducer } from './Reducers/CoursesReducer';
import { userEnrolledCourseReducer } from './Reducers/UserEnrolledReducers';

const rootReducer = combineReducers({
  studentsList: studentsListReducer,
  EnrollmentList:EnrollmentListReducer,
  CourseList:CourseListReducer,
  CourseDetails:CourseDetailsReducer,
  userEnrolledCourse:userEnrolledCourseReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware), 
});

export default store;
