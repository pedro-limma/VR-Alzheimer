import React, { Component, Statusbar } from 'react';

import Routes from './routes';

export default class App extends Component {
  render() {

    return (
      <>
        <Statusbar />
        <Routes />
      </>
    );

  }
}
