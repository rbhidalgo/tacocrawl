import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import MapContainer from "../MapContainer/MapContainer";
import star1 from "./1star.png";
import star2 from "./2star.png";
import star2half from "./2halfstar.png";
import star3 from "./3star.png";
import star3half from "./3halfstar.png";
import star4 from "./4star.png";
import star4half from "./4halfstar.png";
import star5 from "./5star.png";
import pinImg from "./pin.png"

import "./locationContainer.css";
import RestCard from "../styles/RestCard";

class Locations extends Component {
	state = {
		locations: [],
		randomCrawl: [],
		location: "",
		menuLocation: "Choose Location",
		toggle: false,
		toggleNumber: false,
		numberOfLocations: Number,
		numbTextLocations: "How many locations?",
		highlight: false,
		numbHighlight: false,
		crawlHighlight: false,
		btnColor: false
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
		this.setState({
			toggle: !this.state.toggle,
			highlight: !this.state.highlight
		});
	};

	toggleOff = e => {
		this.setState({
			toggle: false,
			location: e.target.innerText,
			menuLocation: e.target.innerText
		});
	};

	toggleHandlerNumber = () => {
		this.setState({
			toggleNumber: !this.state.toggleNumber,
			numbHighlight: !this.state.numbHighlight,
			crawlHighlight: !this.state.crawlHighlight,
			btnColor: !this.state.btnColor
		});
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
			<>
				<div className='locationContainer'>
					<div className='crawlContainer'>
						<div className='location-container' onClick={toggleHandler}>
							<h1>1. </h1>
							<h2
								className={
									this.state.highlight
										? "choose-location highlight-green"
										: "choose-location"
								}>
								{this.state.menuLocation}
							</h2>
						</div>
						{this.state.toggle && (
							<ul className='dropDown'>
								{this.location().map((l, i) => {
									return (
										<li onClick={this.toggleOff} key={i} className="liOption">
											{l}
										</li>
									);
								})}
							</ul>
						)}
						<br />
						<div className='number-container' onClick={toggleHandlerNumber}>
							<h1>2. </h1>
							<h2
								className={
									this.state.numbHighlight
										? "choose-number highlight-green"
										: "choose-number"
								}>
								{this.state.numbTextLocations}
							</h2>
						</div>
						{this.state.toggleNumber && (
							<ul className='dropDown'>
								{this.numberOfLocations().map((n, i) => {
									return (
										<li onClick={this.toggleOffNumber} key={i} className="liNumbers">
											{n}
										</li>
									);
								})}
							</ul>
						)}
						<br />
						<div className='btn-crawl' onClick={this.getLocations}>
							<h1>3. </h1>
							<h2
								className={
									this.state.crawlHighlight
										? "lets-crawl highlight-green"
										: "lets-crawl"
								}>
								Let's Crawl!
							</h2>
							<div
								className={
									this.state.btnColor
										? "arrow-right arrow-green"
										: "arrow-right"
								}></div>
						</div>
						<br />
						{this.props.currentUser && this.state.location !== "" ? (
							<button onClick={() => this.addAllCrawl(random)}>
								Add Entire Crawl
							</button>
						) : (
							<h3>
								<span className='spanHighlight'>log-in to add a crawl</span>
							</h3>
						)}
						<MapContainer random={random} />
					</div>
					<RestCard>
						<br />
						{random.map((location, i) => (
							<li key={i}>
								<div className='cardContainer'>
									<div className='coverImage'>
										<img src={location.image_url} className='restImg' />
									</div>
									<div className='restInfo'>
										<h4>
											<a href={location.url} target="_blank" className="restTitle">{location.name}</a>
										</h4>
										{/* <span className='spanHighlight'>{location.rating}</span> */}
										<div className="ratingContainer">
										{location.rating <= 1 ? (
											<img src={star1} />
										) : location.rating <= 2 && location.rating > 1 ? (
											<img src={star2} />
										) : location.rating < 3 && location.rating > 2 ? (
											<img src={star2half} />
										) : location.rating === 3 ? (
											<img src={star3} />
										) : location.rating < 4 && location.rating > 3 ? (
											<img src={star3half} />
										) : location.rating === 4 ? (
											<img src={star4} />
										) : location.rating <= 4.5 && location.rating > 4 ? (
											<img src={star4half} />
										) : location.rating <= 5 && location.rating > 4.5 ? (
											<img src={star5} />
										) : (
											<p>{location.rating}</p>
										)}
										<span className="yellowLine"></span>
										</div>
										<h3>
											{location.review_count}
											&nbsp;reviews
										</h3>
										<div className="restAddInfo">
										<img src={pinImg} className="mapPin"/>
										<p>
											{location.location.display_address[0]}. <br />
											{location.location.display_address[1]}
											{location.location.display_address[2]}
										</p>
										</div>
										{this.props.currentUser &&
											!this.props.currentUser.locations.some(
												l => l.id === location.id
											) && (
												<button
													onClick={() =>
														this.doAddCrawl(location.id, location.name)
													}>
													Add
												</button>
											)}
									</div>
								</div>
							</li>
						))}
					</RestCard>
				</div>
			</>
		);
	}
}

export default withRouter(Locations);
