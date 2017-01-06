import React from 'react';
import {Link} from 'react-router';
import HomePageBlocks from './HomePageBlocks'


class HomePage extends React.Component {
  render() {
    return(
      <div className="stage">
        <HomePageBlocks />
      </div>
    );
  }
}

export default HomePage;
