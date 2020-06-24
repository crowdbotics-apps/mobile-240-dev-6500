import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6586Reducer from '../features/CalendarView6586/redux/reducers';
import EmailAuth6585Reducer from '../features/EmailAuth6585/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView6586: CalendarView6586Reducer,
EmailAuth6585: EmailAuth6585Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});