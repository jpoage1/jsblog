import React, { Component } from 'react';
import { Route, Switch,} from 'react-router-dom';

class SwitchRoutes extends Component {
  routeSet (routeConfig) {
    const { path, render, key, k, exact } = routeConfig;
    return   (<Route
      path={path}
      render={render}
      key={key}
      k={k}
      exact={exact}
    />);
  };
  renderComponent(pathPrefix, k, route, i) {
    const { path, component: C, exact, routes, routeProps } = route
    const fullPath = pathPrefix ? `${pathPrefix}/${path}` : `/${path}`;
    // Route doesn't have a component attoached.
   // if ( !C && routes ) // Then dig deeper for more routes
     // return this.switchRoutes(routes, fullPath, j);
    const switchRoutes = routes !== undefined && routes.length > 0
      ? this.routeConfig(routes, fullPath, 0)
      : [];
    const RoutesToMenu = path === '' ? this.props.routes : undefined;
    const routeConfig = {
      path: path ? fullPath : undefined,
      render: (props) => (<C {...this.props} {...props} {...routeProps} routes={RoutesToMenu} route={this.props.routes[i]} />),
      key: `route_${path}_${i}`,
      exact: exact === true ? true : false,
    }
    return switchRoutes.concat([routeConfig]);
  }
  routeConfig(routes, pathPrefix, k) {
    return routes.map( (route, i) => this.renderComponent(pathPrefix, k, route, i));
  }
  foldRoutes(routes) {
    if ( !Array.isArray(routes) )
      return routes;
    const reducer = (folded, moreRoutes) => 
      folded.concat(
        Array.isArray(moreRoutes)
          ? moreRoutes.reduce(reducer, [])
          : moreRoutes
      );
    const foldRoutes = routes.reduce(reducer, []);
    return foldRoutes;
  }
  switchRoutes(routes) {
    return this.foldRoutes(this.routeConfig(routes)).map(
      (routeConfig) => this.routeSet(routeConfig));
  }
  render() {
    const switchRoutes = this.switchRoutes(this.props.routes);
    return (
      <Switch>
      {switchRoutes}
      </Switch>
    );
  }
}
export default SwitchRoutes;

