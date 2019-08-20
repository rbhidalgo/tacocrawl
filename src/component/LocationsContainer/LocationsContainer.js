import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MapContainer from "../MapContainer/MapContainer";
import CrawlContainer from "../styles/CrawlContainer";

class Locations extends Component {
	state = {
		locations: [],
		randomCrawl: [],
		location: "",
		menuLocation: "Choose Location",
		toggle: null,
		toggleNumber: null,
		numberOfLocations: Number,
		numbTextLocations: "How many locations?"
	};
	componentDidMount() {
		this.getLocations();
	}

	getLocations = async () => {
		try {
			const search = await fetch("/api/v1/", {
				method: "POST",
				credentials: "include",
				body: JSON.stringify({ location: `${this.state.location}` }),
				headers: {
					"Content-type": "application/json"
				}
			});
			const locationsParsed = await search.json();
			const shuffledArray = await this.shuffleArray(locationsParsed.data);
			this.setState({
				locations: locationsParsed.data,
				randomCrawl: shuffledArray
			});
		} catch (err) {
			console.log(err);
			return err;
		}
	};

	shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		return array.slice(0, `${this.state.numberOfLocations}`);
	}

	doAddCrawl = async (id, name, url) => {
		const { currentUser } = this.props;
		const addCrawl = await fetch("/locations", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({ id, name, url, currentUser }),
			headers: {
				"Content-type": "application/json"
			}
		});
		const userJson = await addCrawl.json();
		this.props.doSetCurrentUser(userJson.user);
	};

	addAllCrawl = async randomCrawl => {
		console.log("button clicked");
		const { currentUser } = this.props;
		const addCrawl = await fetch("/locations/crawl", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({ randomCrawl, currentUser }),
			headers: {
				"Content-type": "application/json"
			}
		});
		const userJson = await addCrawl.json();
		this.props.doSetCurrentUser(userJson.user);
	};

	handleChange = e => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	};

	location = () => {
		return [
			"East Los Angeles",
			"Downtown Los Angeles",
			"Historic South Central",
			"Hollywood",
			"Santa Monica",
			"Pasadena"
		];
	};

	numberOfLocations = () => {
		return [3, 4, 5, 6, 7, 8, 9, 10];
	};

	toggleHandler = () => {
		this.setState( prevState => ({
			toggle: !prevState.toggle
		}));
	};

	toggleOff = e => {
		this.setState({
			toggle: false,
			location: e.target.innerText,
			menuLocation: e.target.innerText
		});
	};

	toggleHandlerNumber = () => {
		this.setState( prevState => ({
			toggleNumber: !prevState.toggleNumber
		}));
	};

	toggleOffNumber = e => {
		this.setState({
			toggleNumber: false,
			numberOfLocations: e.target.innerText,
			numbTextLocations: e.target.innerText
		});
	};

	render() {
		const { toggleHandler, toggleHandlerNumber } = this;
		const random = this.state.randomCrawl;
		return (
			<CrawlContainer>
				<div className="location-container" onClick={toggleHandler}>
					<h1>1. </h1>
					<h2 className="choose-location">{this.state.menuLocation}</h2>
				</div>
				{this.state.toggle && (
					<ul className='dropDown'>
						{this.location().map((l, i) => {
							return (
								<li onClick={this.toggleOff} key={i}>
									{l}
								</li>
							);
						})}
					</ul>
				)}
				<br />
					<div className="number-container" onClick={toggleHandlerNumber}>
						<h1>2. </h1>
						<h2 className="choose-number">{this.state.numbTextLocations}</h2>
					</div>
					{this.state.toggleNumber && (
						<ul className='dropDown'>
							{this.numberOfLocations().map((n, i) => {
								return (
									<li onClick={this.toggleOffNumber} key={i}>
										{n}
									</li>
								);
							})}
						</ul>
					)}
					<br />
					<div className="btn-crawl" onClick={this.getLocations}>
						<h1>3. </h1>
						<h2 className="lets-crawl">Let's Crawl!</h2>
						<div className="arrow-right"></div>
						</div>
				<br />
				<div>
					{this.props.currentUser && this.state.location !== "" ? (
						<button onClick={() => this.addAllCrawl(random)}>
							Add Entire Crawl
						</button>
					) : (
						<h3>
							<span className='spanHighlight'>log-in to add a crawl</span>
						</h3>
					)}
					<h2>{this.state.menuLocation} Taco Crawl</h2>
					<br />
					{random.map((location, i) => (
						<li key={i}>
							<a href={location.url}>{location.name}</a>
							<br />
							<img src={location.image_url} width='100px' />
							<br />
							{location.location.display_address} <br />
							<h3>
								rating: <span className='spanHighlight'>{location.rating}</span>
								Review Count:
								<span className='spanHighlight'>{location.review_count}</span>
							</h3>
							<br />
							{this.props.currentUser &&
								!this.props.currentUser.locations.some(
									l => l.id === location.id
								) && (
									<button
										onClick={() => this.doAddCrawl(location.id, location.name)}>
										Add
									</button>
								)}
						</li>
					))}
				</div>
				<div>
					<MapContainer random={random} />
				</div>
			</CrawlContainer>
		);
	}
}

export default withRouter(Locations);
