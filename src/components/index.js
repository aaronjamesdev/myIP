import React, { Component } from 'react';
import './index.css';
import TitleBar from './titleBar/index.js';
import Content from './content/index.js';
import Footer from './footer/index.js';

class Window extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <TitleBar />
        </header>
        <main className="main">
          <Content />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Window;
