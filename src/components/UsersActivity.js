import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

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
      <Map center={[37.75837409926092, -122.44377752518518]} zoom={10}>
        <Marker lat={37.739657514352544} lon={-122.4361199316995} />
        <div className="user">
          <img
            // src={require(profile.profileImage)}
            src={require('../images/img/Profile_image.png')}
            alt="userName"
          />
          <p>Malcolm Quaday</p>
        </div>
      </Map>
    </div>
  );
};

export default UsersActivity;
