import React, { Component } from 'react';
import { Counter } from '../../components/';

class AppPage extends Component {

  render() {
    const { counter, actions } = this.props;
    return (
      <div>
        <Counter counter={counter} actions={actions}/>
      </div>
    );
  }
}

export default AppPage;
