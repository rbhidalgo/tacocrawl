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
         {this.state.locations.map((location, i) => (
             <li key={i}><a href={location.url}>{location.name}</a><br />
             <img src={location.image_url} width="100px"></img><br />
             {location.location.display_address} <br />
             
             </li>
         ))}
      </div>
    )
  }
}

export default withRouter(Locations)