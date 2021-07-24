import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ hola }) => <div>{hola}</div>;

const mapaURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFXCemtQtDHYzkJCa1zBUj0yyCs01VD-o&callback";

class Encuentranos extends Component {
  static defaultProps = {
    center: {
      lat: -12.046374,
      lng: -77.042793
    },
    zoom: 11
  };

  render() {
    return (
        <>
        <p style={{textAlign:'center', margin:'20px auto -20px'}}> Ven y visitanos en nuestro local: Cercado de Lima 830</p>
      <div style={{ height: '500px', width: '90%', margin:'auto', marginTop: '50px', position:'relative', zIndex:'-100' }}>
        <GoogleMapReact
          GoogleMapURL = {mapaURL}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
      </>
    );
  }
}

export default Encuentranos;