import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as routes from "../../constants/routes";
import SubmitBut from "../styles/SubmitBut";
import "./home.css";

class Home extends Component {
	
makeMarquee = () => {
	const title = `Los Angeles • East LA • Downtown LA • Historic South Central •
	Hollywood • Long Beach • Whittier`
	return new Array(50).fill(title).join(' • ')
  }

render(){
	return (
		<div className="parentContainer">
			<div className='home-image'>
				<img src='../public/images/taco-crawling-char.png' />
			</div>
			<div className="intro-text">
				<h1>Taco Crawling:<br /></h1>
				<p className='p-main'>
					“Go eat tacos from place to place.{" "}
					<span className='spanHighlight'>Eat so much,</span> by the time you
					get to the last location{" "}
					<span className='spanHighlight'> you’ll be crawling</span> from eating
					and drinking so much”
				</p>
				<br />
			</div>
			<div className='button-container'>
			<div className='bottom-text marquee'>
				<p>
					{this.makeMarquee()}
				</p>
			</div>
				<div className='button-but'>
					<SubmitBut className='crawl-btn'>
						<NavLink to={routes.LOCATIONS} activeClassName='selected'>
							Let's Crawl!
						</NavLink>
					</SubmitBut>
				</div>
			</div>
		</div>
	);
}
};

export default withRouter(Home);
