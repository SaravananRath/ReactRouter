import React, { Component, Fragment } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Writers from "./Writers";
export default class extends Component {
  state = {
    writers: []
  };

  // the path is not required in package.json as it is being resolved in that file
  // ./node_modules/.bin/json-server --watch store.json --port 4000
  async componentDidMount() {
    const promise = await fetch("http://localhost:4000/writers");
    const writers = await promise.json();
    this.setState({ writers });
    // console.log(writers)
    // fetch('http://localhost:4000/writers')
    // .then(res=>res.json())
    // .then(writers => this.setState({writers}))
    // .catch(err=>console.log(err))
  }
  render() {
    const { writers } = this.state
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path="/writers" render={ props => <Writers  {...props} writers={writers}/>} />
          {/* <Route path="/writers" component={Writers}/> */}
          {/* <Route path="/writers" render={() => <div>Writers</div>} /> */}
        </Fragment>
      </BrowserRouter>
    );
  }
}
