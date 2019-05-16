import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MapContainer from '../MapContainer/MapContainer';

class Locations extends Component {

  state = {
    locations: [],
    randomCrawl: []
  }
  componentDidMount(){
      this.getLocations()
  }

  getLocations = async () => {
      try {
        const search = await fetch('/api/v1/', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({location: 'east los angeles'}),
          headers:{
              "Content-type" : 'application/json'
          }
      })
      
        // const response = await fetch("api/v1/losangeles");
        const locationsParsed = await search.json();
        console.log(locationsParsed)
        const shuffledArray = await this.shuffleArray(locationsParsed.data);
        this.setState({ 
          locations: locationsParsed.data,
          randomCrawl: shuffledArray
         })
      } catch(err) {
          console.log(err)
          return err
      }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array.slice(0,5)
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
    const userJson = await addCrawl.json()
    this.props.doSetCurrentUser(userJson.user)
  }

  addAllCrawl = async (randomCrawl) => {
    console.log('button clicked')
    const { currentUser } = this.props
    const addCrawl = await fetch('/locations/crawl', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({randomCrawl, currentUser}),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const userJson = await addCrawl.json()
    this.props.doSetCurrentUser(userJson.user)
  }

  render() {
    // const random = this.shuffleArray(this.state.locations);
    const random = this.state.randomCrawl;
    //   console.log(randomNumber)
    return (
      <div>
        { this.props.currentUser ?
      
        <button onClick={() => this.addAllCrawl(random)}>Add Crawl</button>
        : <h1>log-in to add a crawl</h1>
        }
         {random.map((location, i) => (
             <li key={i}><a href={location.url}>{location.name}</a><br />
             <img src={location.image_url} width="100px"></img><br />
             {location.location.display_address} <br />
             {location.rating}<br />
             {location.review_count}<br />
             {
             this.props.currentUser
             && !this.props.currentUser.locations.some( r => r.id === location.id)
             && <button onClick={() => this.doAddCrawl
            (location.id, location.name)}>Add</button> 
             }
             </li>
         ))}
         < MapContainer random={random} />
      </div>
    )
  }
}

export default withRouter(Locations)