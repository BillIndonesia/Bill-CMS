import React from 'react'
import {BrowserRouter as Router , Redirect, Route , Switch} from 'react-router-dom'
import {
        Merchant ,
        Header, 
        MainPage ,
        Users , 
        Voucher , 
        Staff ,
        Cashout ,
        VoucherRequest , 
        MerchantRequest , 
        CashoutRequest  , 
        Request ,
        PageNotFound , 
        Transaction

    } from '../index'
function Index(props) {
    return (
        <div className={'main-container'}>
            <Router>
            <Header change={props.change} />
            <div className={'main-body'}>
                <Switch>
                    <Route path="/home" exact>
                        <Redirect to="/home/dashboard"/>
                    </Route>
                  
                    <Route path="/home/dashboard" component={MainPage}  />
                    <Route path="/home/users" component={Users}  />
                    <Route path="/home/admin-menu" component={Merchant}  />
                    <Route path="/home/voucher" component={Voucher}  />
               
                    <Route path="/home/staff" component={Staff}  />
                    <Route path="/home/cashout" component={Cashout}  />
                    <Route path="/home/transaction" component={Transaction}  />
                    <Route path="/home/request" component={Request}  />
                    <Route path="/home/voucher-request" component={VoucherRequest}  />
                    <Route path="/home/merchant-request" component={MerchantRequest}  />
                    <Route path="/home/cashout-request" component={CashoutRequest}  />
                    <Route path="**" component={PageNotFound} />
                </Switch>
                </div>
            </Router>   
        </div> 
    )
}

export default Index
