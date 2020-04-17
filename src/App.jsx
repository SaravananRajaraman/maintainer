import React from 'react';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import NoMatch from './Components/NoMatch';
import RepoTable from './Components/RepoTable';
import { connect } from "react-redux";
import {changeLoading,getRepos} from './actions';
import {HashRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component{

  async componentDidMount(){
      await this.props.getRepos();      
      this.props.changeLoading();
  }

  render() {
    return (
      <React.Fragment>
          <Header/>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>    
              <Route exact path="/Table" component={RepoTable}/>                              
              <Route path="*" component={NoMatch}/>                
            </Switch>
          </Router>          
      </React.Fragment>
    );
  };
};

export default connect(null,{changeLoading,getRepos})(App);