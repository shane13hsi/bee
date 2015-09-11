import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../actions/counter';
import { fetchEnums } from '../../actions/enums';
import AppPage from './AppPage';

class AppContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEnums());
  }

  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(CounterActions, dispatch);
    return (
      <div>
        <AppPage {...this.props} actions={actions}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AppContainer);
