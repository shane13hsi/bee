import React from 'react';

let AppPage = React.createClass({

  render() {
    let {enums} = this.props.Enums;
    console.log(enums);
    return (<div></div>);
  }
});

export default AppPage;