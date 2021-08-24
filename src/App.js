import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import MenuItem from './components/MenuItem';
import PrivateRoute from './components/PrivateRoute';
import Favorites from './components/Favorites';

export default () => {

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/musics.png" link="/" />
                    <MenuItem icon="/assets/accoustic.png" link="/orders" />
                    <MenuItem icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/accoustic">
                            <div>Tela de pedido</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>Tela de profile</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Favorites />
            </Container>

        </BrowserRouter>
    );
}