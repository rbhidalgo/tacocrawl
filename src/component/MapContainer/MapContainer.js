import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ image }) => <div>{<img className="pin" src={image}></img>}</div>;

class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 34.05,
            lng: -118.21
        },
        zoom: 11
    }

    render (){
        console.log(this.props.random)
        return(
            <div>
                <h1>Map Container</h1>
                <div style={{ height: '50vh', width: '90%'}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                {
                    this.props.random.map((location, i) => (
                        <AnyReactComponent key={i}
                            lat={location.coordinates.latitude}
                            lng={location.coordinates.longitude}
                            image="../images/pin.png"
                        />
                    )
                    )}
                </GoogleMapReact>

                </div>
            </div>
        )
    }

}

export default MapContainer;