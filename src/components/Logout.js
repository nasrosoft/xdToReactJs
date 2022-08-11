import loguot from '../images/svg/loguot.svg';

const Logout = () => {
  return (
    <div className="logoutBtn">
      <a href="#">
        <hr />
        <img className="logout" src={loguot} alt="loguot" width="30px" />
        Logout
      </a>
    </div>
  );
};

export default Logout;
