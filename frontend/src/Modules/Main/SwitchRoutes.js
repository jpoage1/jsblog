import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RenderConfig from './RenderConfig';

class SwitchRoutes extends RenderConfig {
  renderComponent( route, i, pathPrefix) {
    const { path, component: C, exact, routes, routeProps } = route
    const fullPath = pathPrefix ? `${pathPrefix}/${path}` : `/${path}`;
    // Route doesn't have a component attoached.
   // if ( !C && routes ) // Then dig deeper for more routes
     // return this.switchRoutes(routes, fullPath, j);
    const switchRoutes = routes !== undefined && routes.length > 0
      ? this.componentConfig(routes, fullPath)
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
  setComponent (routeConfig) {
    const { path, render, key, exact } = routeConfig;
    return   (<Route
      path={path}
      render={render}
      key={key}
      exact={exact}
    />);
  };
  render() {
    const switchRoutes = this.configure(this.props.routes);
    return (
      <Switch>
      {switchRoutes}
      </Switch>
    );
  }
}
export default SwitchRoutes;

