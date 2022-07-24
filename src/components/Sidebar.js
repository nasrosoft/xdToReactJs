import Logout from './Logout';
import Menu from './Menu';

const hrStyle = {
  color: '#EBF2F7',
  backgroundColor: '#EBF2F7',
  height: 2,
  border: 'none',
};
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="profile">
        <img src={require('../images/img/Profile_image.png')} />
        <h6>Miroslav Minev</h6>
        <span>$ 52</span>
      </div>
      <hr style={hrStyle} />
      <Menu />
      <hr style={hrStyle} />
      <Logout />
    </div>
  );
};

export default Sidebar;
