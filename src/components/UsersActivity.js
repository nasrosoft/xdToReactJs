import React from 'react';
import ReactDOM from 'react-dom';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';

const LeafletMap = () => (
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);
const UsersActivity = (props) => {
  return (
    <div className="UsersActivity box box4">
      <span className="info">
        <p>Users activity</p>
        <p className="iInfo">
          <a href="#">ⓘ</a>
        </p>
      </span>
      <hr />
      <LeafletMap />
    </div>
  );
};

export default UsersActivity;
