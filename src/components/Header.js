import search from '../images/svg/icon/search.svg';
import notifications from '../images/svg/icon/notifications.svg';
import profile from '../images/svg/icon/profile.svg';
import ellipse from '../images/svg/icon/Ellipse_10.svg';

const Header = () => {
  return (
    <div className="header">
      <image className="logo">Miro</image>
      <div className="shortcut">
        <span>
          <img src={search} alt="dashboard" />
        </span>
        <span>
          <img src={notifications} alt="dashboard" className="notification" />
          <img src={ellipse} alt="dashboard" className="ellipse" />
        </span>
        <span>
          <img src={profile} alt="dashboard" />
        </span>
      </div>
    </div>
  );
};

export default Header;
