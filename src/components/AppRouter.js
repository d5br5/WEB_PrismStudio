import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Navigation from "./Navigation";

import {Home, AdminShop, AdminShopInfo, AdminShopPrice, AdminShopReview, AdminShopPhoto} from "../routes/RouteManager";

const AppRouter = ({isLoggedIn, init, setInit, shopList, setShopList}) => {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/" replace>
                    <Home isLoggedIn={isLoggedIn}/>
                </Route>
                {isLoggedIn && (
                    <>
                        <Route exact path="/admin/shop" replace>
                            <AdminShop shopList={shopList} init={init}/>
                        </Route>
                        <Route exact path="/admin/shop/info/:id">
                            <AdminShopInfo shopList={shopList}/>
                        </Route>
                        <Route exact path="/admin/shop/price/:id">
                            <AdminShopPrice shopList={shopList}/>
                        </Route>
                        <Route exact path="/admin/shop/review/:id">
                            <AdminShopReview shopList={shopList}/>
                        </Route>
                        <Route exact path="/admin/shop/photo/:id">
                            <AdminShopPhoto shopList={shopList}/>
                        </Route>
                    </>
                )}
                <Redirect from="*" to="/"/>
            </Switch>
        </Router>
    );
};

export default AppRouter;
