import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6622Reducer from '../features/CalendarView6622/redux/reducers';
import EmailAuth6621Reducer from '../features/EmailAuth6621/redux/reducers';
import EmailAuth6618Reducer from '../features/EmailAuth6618/redux/reducers';
import CalendarView6617Reducer from '../features/CalendarView6617/redux/reducers';
import CalendarView6616Reducer from '../features/CalendarView6616/redux/reducers';
import EmailAuth6615Reducer from '../features/EmailAuth6615/redux/reducers';
import EmailAuth6612Reducer from '../features/EmailAuth6612/redux/reducers';
import CalendarView6611Reducer from '../features/CalendarView6611/redux/reducers';
import CalendarView6610Reducer from '../features/CalendarView6610/redux/reducers';
import EmailAuth6609Reducer from '../features/EmailAuth6609/redux/reducers';
import EmailAuth6606Reducer from '../features/EmailAuth6606/redux/reducers';
import CalendarView6605Reducer from '../features/CalendarView6605/redux/reducers';
import CalendarView6604Reducer from '../features/CalendarView6604/redux/reducers';
import EmailAuth6603Reducer from '../features/EmailAuth6603/redux/reducers';
import EmailAuth16590Reducer from '../features/EmailAuth16590/redux/reducers';
import CalendarView6589Reducer from '../features/CalendarView6589/redux/reducers';
import EmailAuth6588Reducer from '../features/EmailAuth6588/redux/reducers';
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
CalendarView6622: CalendarView6622Reducer,
EmailAuth6621: EmailAuth6621Reducer,
EmailAuth6618: EmailAuth6618Reducer,
CalendarView6617: CalendarView6617Reducer,
CalendarView6616: CalendarView6616Reducer,
EmailAuth6615: EmailAuth6615Reducer,
EmailAuth6612: EmailAuth6612Reducer,
CalendarView6611: CalendarView6611Reducer,
CalendarView6610: CalendarView6610Reducer,
EmailAuth6609: EmailAuth6609Reducer,
EmailAuth6606: EmailAuth6606Reducer,
CalendarView6605: CalendarView6605Reducer,
CalendarView6604: CalendarView6604Reducer,
EmailAuth6603: EmailAuth6603Reducer,
EmailAuth16590: EmailAuth16590Reducer,
CalendarView6589: CalendarView6589Reducer,
EmailAuth6588: EmailAuth6588Reducer,
CalendarView6586: CalendarView6586Reducer,
EmailAuth6585: EmailAuth6585Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});