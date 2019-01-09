import { Component } from 'react';

class RenderConfig extends Component {
  componentConfig(components, pathPrefix) {
    return components.map( (component, i) => this.renderComponent(component, i, pathPrefix));
  }
  foldComponents(component) {
    if ( !Array.isArray(component) )
      return component;
    const reducer = (folded, children) => 
      folded.concat(
        Array.isArray(children)
          ? children.reduce(reducer, [])
          : children
      );
    const foldComponents = component.reduce(reducer, []);
    return foldComponents;
  }
  configure(components) {
    return this.foldComponents(this.componentConfig(components)).map(
      (component) => this.setComponent(component));
  }
}
export default RenderConfig;

