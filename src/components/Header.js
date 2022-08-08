import search from '../images/svg/icon/search.svg';
import notifications from '../images/svg/icon/notifications.svg';
import profile from '../images/svg/icon/profile.svg';

const Header = () => {
  return (
    <div className="header">
      <h6 className="logo">Miro</h6>
      <div className="shortcut">
        <span>
          <a href="#">
            <img src={search} alt="dashboard" />
          </a>
        </span>
        <span className="notification">
          <a href="#">
            <img src={notifications} alt="dashboard" />
          </a>
        </span>
        <span>
          <a href="#">
            <img src={profile} alt="dashboard" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
