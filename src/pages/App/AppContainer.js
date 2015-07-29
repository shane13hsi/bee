import React from 'react';
import connectToStores from 'alt/utils/connectToStores';

import AppPage from './AppPage';
import EnumsStore from '../../modules/Enums/EnumsStore';
import EnumsActions from '../../modules/Enums/EnumsActions';

let AppContainer = React.createClass({
  statics: {
    getStores() {
      return [EnumsStore];
    },

    getPropsFromStores() {
      return Object.assign({},
        {
          Enums: Object.assign(EnumsStore.getState())
        }
      );
    }
  },

  componentDidMount() {
    EnumsActions.fetchEnums();
  },

  render() {
    return (
      <AppPage
        {...this.props}>
      </AppPage>
    );
  }

});

export default connectToStores(AppContainer);