import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import App from "../components/App";
import { Detalle } from '../components/Detalle';

export const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/regproducto"  component={App}/>
                <Route exact path="/detalle"  component={Detalle}/>
                <Redirect to="/regproducto" />
            </Switch>
        </div>  
    )
}
