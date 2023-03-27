import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import { Container, Navbar } from 'react-bootstrap';


const GoogleMap = ({ locations, zoomLevel }) => {

  return (<div className="map">
  <Navbar bg='dark' expand='lg' variant='dark'>
    <Container>
        <Navbar.Brand>Crash Locations in Alachua</Navbar.Brand>
    </Container>
  </Navbar>

  <div className="google-map" style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDSM3UU3tk5suFWnbP3B5AF4RQff8F1X_s' }}
      defaultCenter={locations[0]}
      defaultZoom={zoomLevel}
    >
      {locations.map(location => {
              return (
            <LocationPin
                          lat={location.lat}
                          lng={location.lng}
                          text={location.address}
                        />
              )
              

             })}
      
    </GoogleMapReact>
  </div>
</div>)
  
};

export default GoogleMap