import React, { useState, useRef } from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import AutoComplete from 'react-google-autocomplete';

function Test(props) {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 37.5663, lng: 126.9779 }); // 기본 위치는 샌프란시스코로 설정
  const [marker, setMarker] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const autocompleteService = useRef(null);

  const APIKey = 'AIzaSyAqKCB391AenPrVmJmA3s_dWTdAazw0FOA';

  const onLoad = (map) => {
    setMap(map);
    autocompleteService.current = new window.google.maps.places.AutocompleteService();
  };

  const onMarkerDragEnd = (e) => {
    setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  const handleSearch = () => {
    if (!autocompleteService.current) return;

    autocompleteService.current.getPlacePredictions({ input: searchText }, (results, status) => {
      if (status === 'OK' && results) {
        setAutocompleteResults(results);
      } else {
        // Handle error
        console.error('Autocomplete was not successful for the following reason:', status);
      }
    });
  };

  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <div style={{ width: '30%' }}>
        <div> 동행 장소 검색 </div>
        <div>
          <input
            type="text"
            placeholder="장소 검색"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onBlur={() => setAutocompleteResults([])}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
        <AutoComplete apiKey={APIKey} onPlaceSelected={(place) => console.log(place)} />
      </div>

      <div style={{ width: '70%' }}>
        <LoadScript googleMapsApiKey={APIKey}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={center}
            zoom={13}
            onLoad={onLoad}
          >
            {marker && (
              <Marker position={marker.position} draggable={true} onDragEnd={onMarkerDragEnd} />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Test;
