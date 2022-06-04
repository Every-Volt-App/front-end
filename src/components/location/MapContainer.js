import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const MapContainer = ({locations}) => {
    // const location ={lat, lng}
    // const [ currentPosition, setCurrentPosition ] = useState({});

    const mapStyles = {
        height: "50vh",
        width: "120%"
    };

    const defaultCenter = {
        lat: 32.7767, lng: -96.7970
    }

   
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCnz-P1nMykPKDGvANKXubzoAKFAMwDnlM'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                    {
                        locations.length > 0 && 
                        locations.map((location) => {
                            console.log(typeof(location.AddressInfo.Latitude))
                            return(
                                <Marker
                                title="title"
                                key={location.id}
                                position={{
                                    lat: location.AddressInfo.Latitude,
                                    lng: location.AddressInfo.Longitude
                                }}
                                // onClick={() => onSelect(item)}
                                />
                                )
                        }
                     )
                    }
{/*                 {
                    selected.location &&
                    (
                        <InfoWindow
                            position={[selected.AddressInfo.Latitude, selected.AddressInfo.Longitude]}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <p>{selected.AddressInfo.Title}</p>
                        </InfoWindow>
                    )
                } */}
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;