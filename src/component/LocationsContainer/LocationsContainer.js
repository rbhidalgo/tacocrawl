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
        const search = await fetch('/api/v1/', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({location: 'east los angeles', limit: 5}),
          headers:{
              "Content-type" : 'application/json'
          }
      })
      
        // const response = await fetch("api/v1/losangeles");
        const locationsParsed = await search.json();
        console.log(locationsParsed)
        this.setState({ locations: locationsParsed.data })
      } catch(err) {
          console.log(err)
          return err
      }
  }
 
  // randomLocation = () => {
  //   const maxNumber = 50;
  //   const randomNumber = Math.floor((Math.random() * maxNumber)+1);
  //   console.log(randomNumber)
  // }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }

  doAddCrawl = async (id, name) => {
    const { currentUser } = this.props
    const addCrawl = await fetch('/locations', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({id, name, currentUser}),
      headers: {
        'Content-type': 'application/json'
      }
    })
  }

  render() {
    const random = this.shuffleArray(this.state.locations);
    //   console.log(randomNumber)
    return (
      <div>
         {random.map((location, i) => (
             <li key={i}><a href={location.url}>{location.name}</a><br />
             <img src={location.image_url} width="100px"></img><br />
             {location.location.display_address} <br />
             {
             this.props.currentUser
             && <button onClick={() => this.doAddCrawl
            (location.id, location.name)}>Add</button>
             }
             </li>
         ))}
      </div>
    )
  }
}

export default withRouter(Locations)