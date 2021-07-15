import {createStore , combineReducers , applyMiddleware} from 'redux'
import ReducerMerchant from './Merchant/Reducer'
import ReducerMerchanList from './Merchant/ReducerList'
import ReducerUser from './Users/Reducer'
import ReducerStaff from './Staff/Reducer' 
import ReducerStaffList from './Staff/ReducerList'
import ReducerCashout from './Cashout/Reducer'
import ReducerCashoutHistory from './Cashout/ReducerHistory'
import thunk from 'redux-thunk'

const Root = combineReducers({
    Merchant : ReducerMerchant ,
    MerchantList : ReducerMerchanList ,
    User     : ReducerUser ,
    Staff    : ReducerStaff ,
    StaffList : ReducerStaffList ,
    Cashout  : ReducerCashout ,
    CashoutH : ReducerCashoutHistory
})

const Store = createStore(Root, applyMiddleware(thunk))

export default Store