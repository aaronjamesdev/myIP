import React, { Component } from 'react';
import './index.css';
const networkInterfaces = window.require('os').networkInterfaces();

class NetworkTypes extends Component {

  selectActiveNetworkType = (index) => {
    this.props.onSelect(this.props.index)
  };

  render() {
    return (
      <div className="network-types-container">
        <div className={this.props.isActive ? 'network-type active' : 'network-type'} onClick={this.selectActiveNetworkType.bind(this)}>{this.props.name}</div>
      </div>
    );
  }
}

class NetworkProperties extends Component {

  getProperties = () => {
    if(this.props.isActive >= 0)
    {
      return Object.keys(networkInterfaces).map((key, index) => {
         if(networkInterfaces[key].length > 0 && index === this.props.isActive) {
           return networkInterfaces[key].map((network, index) => (
                    <div className="network-properties">
                      <div>Type: {network.family}</div>
                      <div>Address: {network.address}</div>
                      <div>Mac Address: {network.mac}</div>
                      <div>Subnet Mask {network.netmask}</div>
                    </div>
                   ));
         }
         else return [];
       });
    }
  };

  render() {
    return (
      <div className="network-properties-container">{this.getProperties()}</div>
    );
  }
}

class Content extends Component {
  constructor() {
    super();
    this.state = {active: null};
    this.state = {networkType: null};
  }

  selectNetworkType = (index, key) => {
    this.setState({active: index})
  };

  renderNetworkTypes = (networkInterfaces) => {
    return Object.keys(networkInterfaces).map((key, index) => {
      return  <NetworkTypes
                key={index}
                name={key}
                isActive={this.state.active===index}
                index={index}
                onSelect={this.selectNetworkType}
              />
    });
   };

   render() {
     return (
      <div className="content">
        <div className="network-types-container">
          {this.renderNetworkTypes(networkInterfaces)}
        </div>
        <div>
          <NetworkProperties
            isActive={this.state.active}
          />
        </div>
      </div>
    );
  }
}

export default Content;
