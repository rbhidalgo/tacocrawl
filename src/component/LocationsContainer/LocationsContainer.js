import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MapContainer from '../MapContainer/MapContainer';
import CrawlContainer from '../styles/CrawlContainer';
import Input from '../styles/Input';

class Locations extends Component {

  state = {
    locations: [],
    randomCrawl: [],
    menuLocation: 'Choose Location',
    toggle: false
  }
  componentDidMount(){
      this.getLocations()
  }

  getLocations = async () => {
      try {
        const search = await fetch('/api/v1/', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({location: `${this.state.location}`}),
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

  doAddCrawl = async (id, name, url) => {
    const { currentUser } = this.props
    const addCrawl = await fetch('/locations', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({id, name, url, currentUser}),
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

  handleChange = (e) => {
    this.setState({
        [e.currentTarget.name]: e.currentTarget.value
      })}

  location = ()=>{
    return ["East Los Angeles","Downtown Los Angeles", "Historic South Central", "Hollywood", "Long Beach", "Whittier"]
  }

  toggleHandler = () => {
    this.setState({
      toggle: true
    })
  }

  toggleOff = (e) =>{
    console.log(e.target.innerText)
    this.setState({
      toggle:false,
      location: e.target.innerText,
      menuLocation: e.target.innerText
    })
  }

  render() {
    const { toggleHandler } = this
    const random = this.state.randomCrawl;
    //   console.log(randomNumber)
    return (
      <CrawlContainer>
        <div>
          <div onClick={toggleHandler}>{this.state.menuLocation}</div>
          {this.state.toggle && 
          (<ul className="dropDown">
            {this.location().map((l,i)=>{
              return <li onClick={this.toggleOff} key={i}>{l}</li>
            })}
          </ul>)
          }
          <button onClick={this.getLocations}>Submit</button>
        </div>
        <div>
        { this.props.currentUser ?
      
        <button onClick={() => this.addAllCrawl(random)}>Add Crawl</button>
        : <h3><span className="spanHighlight">log-in to add a crawl</span></h3>
        }
        <h1>{this.state.menuLocation} Taco Crawl</h1>
         {random.map((location, i) => (
             <li key={i}><a href={location.url}>{location.name}</a><br />
             <img src={location.image_url} width="100px"></img><br />
             {location.location.display_address} <br />
             <h3>rating: <span className="spanHighlight">{location.rating}</span> Review Count: <span className="spanHighlight">{location.review_count}</span></h3><br />
             {
             this.props.currentUser
             && !this.props.currentUser.locations.some( r => r.id === location.id)
             && <button onClick={() => this.doAddCrawl
            (location.id, location.name)}>Add</button> 
             }
             </li>
         ))}</div>
         <div>< MapContainer random={random} /></div>
      </CrawlContainer>
    )
  }
}

export default withRouter(Locations)