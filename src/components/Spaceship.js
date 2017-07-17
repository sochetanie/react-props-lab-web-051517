// Code The Spaceship Component Here
import React from 'react';


export default class Spaceship extends React.Component {
    render() {
        return (
          <div>
            <h1>Name: {this.props.name}</h1>
            <h2>Speed {this.props.speed}</h2>
            <h3>Has Rockets?: {this.props.hasRockets}</h3>
            <h4>Colors: </h4>
            <ul>
                <li>{this.props.colors}</li>
            </ul>
          </div>
            )
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}

