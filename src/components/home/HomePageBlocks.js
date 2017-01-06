import React from 'react';

class HomePageBlocks extends React.Component {
  render() {
    return (
      <div className="stage">
        <div className="block box1">
          <div className="homePageTitles">
            <h1 className="homePageTitle">Puerto Rico</h1>
            <h4 className="homePageSubTitle">FAIR LIFE</h4>
          </div>
        </div>
        <div className="caption">
          <h4>Caption Title 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="block box2"/>
        <div className="caption">
          <h4>Caption Title 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="block box3"/>
          <div className="caption">
            <h4>Caption Title 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
      </div>
    );
  }
}

export default HomePageBlocks;
