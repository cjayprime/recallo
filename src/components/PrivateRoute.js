import React, {Component} from 'react';
import { Route, Redirect } from "react-router-dom";

import * as Actions from '../store/actions';

export default class PrivateRoute extends Component{
    render(){
        return (
            <Route
                {...this.props}
                render={props => {
                    const content = Actions.token.get() ? (

                        <this.props.component {...props} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/signin",
                                    state: { from: props.location },
                                }}
                            />
                        )
                    return content
                }}
            />
        )
    }
};