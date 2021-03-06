/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_TO_CNODE,
  LOGIN_TO_CNODE_SUCCESS,
  LOGIN_TO_CNODE_FAILURE
} from '../constants/actionTypes';
import { checkUserAccesstokenUrl } from '../constants/api';
import { postFetch } from '../utils/fetchUtils';

function* userLoginToCNode(action) {
  try {
    const res = yield call(postFetch, action.payload.timeout, checkUserAccesstokenUrl, action.payload.params);
    if(res.success == true) {
      yield put({
        type: LOGIN_TO_CNODE_SUCCESS,
        payload: {
          isLogging: false,
          isLoginSuccess: true,
          accesstoken: action.payload.params.accesstoken
        }
      });
    }
  } catch(error) {
    yield put({
      type: LOGIN_TO_CNODE_FAILURE,
      payload: {
        isLogging: false,
      }
    })
  }
}

export function* watchUserLoginToCNode() {
  while(true) {
    const action = yield take(LOGIN_TO_CNODE);
    console.log(action);
    yield call(userLoginToCNode, action)
  }
}
