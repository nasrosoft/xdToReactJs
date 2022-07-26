import Logout from './Logout';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="profile">
        <img src={require('../images/img/Profile_image.png')} />
        <h6>Miroslav Minev</h6>
        <span>$ 52</span>
      </div>
      <hr />
      <Menu />
      <hr />
      <Logout />
    </div>
  );
};

export default Sidebar;
