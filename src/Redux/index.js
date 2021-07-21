import {createStore , combineReducers , applyMiddleware} from 'redux'
import ReducerMerchant from './Merchant/Reducer'
import ReducerMerchanList from './Merchant/ReducerList'
import ReducerUser from './Users/Reducer'
import ReducerStaff from './Staff/Reducer' 
import ReducerStaffList from './Staff/ReducerList'
import ReducerCashoutHistory from './Cashout/ReducerHistory'
import ReducerVoucherList from './Voucher/ReducerList'
import ReducerConfirm from './Confirmation/Reducer'
import thunk from 'redux-thunk'

const Root = combineReducers({
    Merchant : ReducerMerchant ,
    MerchantList : ReducerMerchanList ,
    User     : ReducerUser ,
    Staff    : ReducerStaff ,
    StaffList : ReducerStaffList ,
    CashoutH : ReducerCashoutHistory ,
    VoucherList : ReducerVoucherList ,
    Confirmation : ReducerConfirm
})

const Store = createStore(Root, applyMiddleware(thunk))

export default Store