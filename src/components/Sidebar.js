import Logout from './Logout';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <div className="Sidebar  box box1">
      <div className="profile">
        <img
          src={require('../images/img/Profile_image.png')}
          className="imgProfile"
        />
        <h6>Miroslav Minev</h6>
        <span>$ 52</span>
      </div>
      <hr />
      <Menu />
      <Logout />
    </div>
  );
};

export default Sidebar;
