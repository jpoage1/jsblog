import React , { Component } from 'react';
import RecentPosts from '../Components/RecentPosts';
import BrowseByCategory from '../Components/BrowseByCategory';


class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <RecentPosts />
        <BrowseByCategory />
      </nav>
    );
  }
}
export default Sidebar;