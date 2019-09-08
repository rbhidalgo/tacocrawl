import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const API_KEY = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";

const MapPin = ({ image }) => (
	<div>{<img className='pin' src={image} />}</div>
);

class MapContainer extends Component {
	static defaultProps = {
		center: {
			lat: 34.05,
			lng: -118.21
		},
		zoom: 11
	};

	render() {
		return (
			<>
				<hr />
				<div style={{ height: "50vh", width:"60vw" }}>
					<GoogleMapReact
						bootstrapURLKeys={{
							key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
						}}
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}>
						{this.props.random.map((location, i) => (
							<MapPin
								key={i}
								lat={location.coordinates.latitude}
								lng={location.coordinates.longitude}
								image='../images/pin.png'
							/>
						))}
					</GoogleMapReact>
				</div>
			</>
		);
	}
}

export default MapContainer;
