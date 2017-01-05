import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>This is the homepage</h1>
        <p>Developed with React Redux React Router in ES6</p>
        <Link to="about" className="btn btn-info btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
