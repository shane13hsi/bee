import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
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
      <Counter counter={counter} actions={actions}/>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
