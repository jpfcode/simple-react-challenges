import React, { Component } from 'react';

import Align from './align';
import Clock from './clock';
import Counter from './counter';
import HideMe from './hideme';
import FontSize from './fontsize';
import ColorMe from './color';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-wrapper'>
          <Align />
          <hr/>
          <HideMe />
          <hr/>
          <Counter />
          <hr/>
          <FontSize />
          <hr/>
          <ColorMe />
          <hr/>
          <Clock />
        </div>
      </div>
    );
  }
}
