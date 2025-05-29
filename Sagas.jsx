import {takeEvery} from 'redux-saga/effects';
import { SUBMIT_INPUT } from './Action';


function* handleInputs(action) {
  const {input1, input2} = action.payload;

   console.log('Input 1:', input1);
   console.log('Input 1:', input2);
}

export default function* rootSaga(){
  yield takeEvery(SUBMIT_INPUT, handleInputs);
}