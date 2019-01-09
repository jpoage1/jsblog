import React from 'react';
//import Card from '../Modules/Card';
import RenderConfig from '../Main/RenderConfig'
import cards from './cards';

class Sidebar extends RenderConfig {
  renderComponent(component, i) {
    const { component: C, children } = component
    const componentChildren = children !== undefined && children.length > 0
      ? this.compenentConfig(children)
      : [];
    const key = `sidebar_${component}_i`;
    const element = (<C key={key} />) // temperarily empty for testing
    return componentChildren.concat([element]);
  }
  setComponent (componentConfig) {
    return [componentConfig];
  };
  render() {
    const sideBar = this.configure(cards);
    return (
      <div className="sidebar">
      {sideBar}
      </div>
    );
  }
}
export default Sidebar;

