/* eslint-disable react/style-prop-object */
import ReactMapboxGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FC, useState } from 'react';
import { Container } from './body.styles';

const Body: FC = () => {
  const TOKEN = 'pk.eyJ1Ijoia2FmaXItY29kZXIiLCJhIjoiY2wyNHd4M2wxMDFwbjNqbGpvNWdrdGE5cSJ9.p5-5xrZVR9jek9vdQg6WCA';

  const [viewState, setViewState] = useState({
    longitude: 13.234444,
    latitude: -8.838333,
    zoom: 13,
  });

  return (
    <Container>
      <ReactMapboxGl
        style={{ width: '100%', height: '100%' }}
        mapboxAccessToken={TOKEN}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={13.234444} latitude={-8.838333} anchor="bottom">
          <img src="/pin.png" alt="" />
        </Marker>
      </ReactMapboxGl>
    </Container>
  );
};

export default Body;
