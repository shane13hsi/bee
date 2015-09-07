import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Counter, Navbar } from '../components';
import * as CounterActions from '../actions/counter';
import { fetchEnums } from '../actions/enums';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEnums());
  }

  render() {
    const { counter, dispatch } = this.props;
    const actions = bindActionCreators(CounterActions, dispatch);
    return (
      <div>
        <Navbar />
        <Counter counter={counter} actions={actions}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
