import React, { Component } from 'react';
const electron = window.require('electron');
import './index.css';

class Footer extends Component {
  static defaultProps = {
   url: 'https://github.com/aaronjamesdev',
   logo: require("./images/git.png")
 };

 openBrowser = () => electron.shell.openExternal(this.props.url);

  render() {
    return (
      <div className="github-logo-container">
        <img alt="GitHub Logo" onClick={this.openBrowser} src={this.props.logo} />
      </div>
    );
  }
}

export default Footer;
