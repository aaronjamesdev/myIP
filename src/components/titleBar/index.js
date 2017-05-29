import React, { Component } from 'react';
import './index.css';
import { TitleBar } from 'react-desktop/windows';
const remote = window.require('electron').remote;

class Header extends Component {
  static defaultProps = {
   color: '#1c1e22',
   theme: 'light'
 };

 constructor(props) {
    super(props);
    this.state = { isMaximized: false };
  }

  close = () => remote.getGlobal("mainWindow").close();
  minimize = () => remote.getGlobal("mainWindow").minimize();
  toggleMaximize = () => {
      this.setState({ isMaximized: !this.state.isMaximized });
      if(this.state.isMaximized)
        remote.getGlobal("mainWindow").unmaximize();
      else
        remote.getGlobal("mainWindow").maximize();
    }

  render() {
    return (
      <TitleBar
        title="My IP"
        controls
        isMaximized={this.state.isMaximized}
        theme={this.props.theme}
        background={this.props.color}
        onCloseClick={this.close}
        onMinimizeClick={this.minimize}
        onMaximizeClick={this.toggleMaximize}
        onRestoreDownClick={this.toggleMaximize}
      />
    );
  }
}

export default Header;
