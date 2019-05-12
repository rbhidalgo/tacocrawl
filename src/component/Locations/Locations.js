import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Locations extends Component {

  state = {
    locations: []
  }
  componentDidMount(){
      this.getLocations()
  }

  getLocations = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1");
        const locationsParsed = await response.json();
        this.setState({ locations: locationsParsed.data })
      } catch(err) {
          console.log(err)
          return err
      }
  }
 
  render() {
    return (
      <div>
          <h1>{this.state.locations}</h1>
      </div>
    )
  }
}

export default withRouter(Locations)