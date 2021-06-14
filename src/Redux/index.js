import {createStore , combineReducers , applyMiddleware} from 'redux'
import ReducerMerchant from './Merchant/Reducer'
import ReducerUser from './Users/Reducer'
import ReducerStaff from './Staff/Reducer' 
import thunk from 'redux-thunk'
const Root = combineReducers({
    Merchant : ReducerMerchant ,
    User     : ReducerUser ,
    Staff    : ReducerStaff
})

const Store = createStore(Root, applyMiddleware(thunk))

export default Store