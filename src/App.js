import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './App.css';

const Index = props => {
  return (
    <>
  <h2>home page</h2>
  <p>Hello {props.name}</p>
  </>
  )
}

const About = () => <h2>About page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const Topic = props => <h3>Requested Param:
{props.match.params.id}</h3>

const Topics = ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>
      <nav>
        <ul>
          <li>
            <link to={`${match.url}/components`}
            >Components</link>
          </li>
          <li>
            <link to={`${match.url}/props-v-state`}>Props v. State</link>
          </li>
        </ul>
      </nav>
      <Route path= {`${match.path}/:id`} component= 
      {Topic} />
      <Route 
        exact 
        path= {match.path}
        render={() => <h3>Please select topic</h3>}
        />
    </div>
  )
}






function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">contact</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact render={routeProps => <Index name="Angel" {...routeProps} />} 
        />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="topics" component={Topic} />
      </div>
    </Router>
  );
}

    

export default App;