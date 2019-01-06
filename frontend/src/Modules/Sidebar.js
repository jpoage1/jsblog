import React , { Component } from 'react';
import RecentPosts from '../Components/RecentPosts';
import BrowseByCategory from '../Components/BrowseByCategory';


class Sidebar extends Component {
  state = { };
  render() {
    return (
      <div className="sidebar">
        <RecentPosts />
        <BrowseByCategory />
      </div>
    );
  }
}
export default Sidebar;