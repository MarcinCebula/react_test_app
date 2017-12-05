import { Map } from 'immutable';
import actions, { getView } from './actions';


const initState = new Map({

});
export default function appReducer(state = initState, action) {
  switch (action.type) {
  default:
    return state;
  }
  return state;
}
