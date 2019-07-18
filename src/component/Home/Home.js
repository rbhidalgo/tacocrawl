import React from "react";
import { withRouter } from "react-router-dom";
import ParentContainer from "../styles/ParentContainer";
import { NavLink } from "react-router-dom";
import * as routes from "../../constants/routes";
import SubmitBut from "../styles/SubmitBut";

const Home = () => {
	return (
		<ParentContainer>
			<div className='home-image'>
				<img src='../public/images/tacoonblack2.jpg' />
			</div>
			<div>
				<p className='p-main'>
					“ Go eat tacos from place to place.{" "}
					<span className='spanHighlight'>Eat so much,</span> by the time you
					get to the last location{" "}
					<span className='spanHighlight'> you’ll be crawling</span> from eating
					and drinking so much ”
				</p>
				<br />
			</div>
			<div className='button-container'>
				<div className='bottom-text'>
					<p>
						Los Angeles • East LA • Downtown LA • Historic South Central •
						Hollywood • Long Beach • Whittier • Los Angeles • East LA • Downtown
						LA • Historic South Central • Hollywood • Long Beach • Whittier •
						Los Angeles • East LA • Downtown LA • Historic South Central •
						Hollywood • Long Beach • Whittier • Los Angeles • East LA • Downtown
						LA • Historic South Central Los Angeles • East LA • Downtown LA •
						Historic South Central • Hollywood • Long Beach • Whittier • Los
						Angeles • East LA • Downtown LA • Historic South Central • Hollywood
						• Long Beach • Whittier • Los Angeles • East LA • Downtown LA •
						Historic South Central • Hollywood • Long Beach • Whittier • Los
						Angeles • East LA • Downtown LA • Historic South Central Los Angeles
						• East LA • Downtown LA • Historic South Central • Hollywood • Long
						Beach • Whittier • Los Angeles • East LA • Downtown LA • Historic
						South Central • Hollywood • Long Beach • Whittier • Los Angeles •
						East LA • Downtown LA • Historic South Central • Hollywood • Long
						Beach • Whittier • Los Angeles • East LA • Downtown LA • Historic
						South Central Los Angeles • East LA • Downtown LA • Historic South
						Central • Hollywood • Long Beach • Whittier • Los Angeles • East LA
						• Downtown LA • Historic South Central • Hollywood • Long Beach •
						Whittier • Los Angeles • East LA • Downtown LA • Historic South
						Central • Hollywood • Long Beach • Whittier • Los Angeles • East LA
						• Downtown LA • Historic South Central
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
		</ParentContainer>
	);
};

export default withRouter(Home);
