import dashboard from '../images/svg/dashboard.svg';
import tradingView from '../images/svg/trading view.svg';
import analytics from '../images/svg/analytics.svg';
import fileManager from '../images/svg/files.svg';
import usersManager from '../images/svg/Groupe 15.svg';
import calendar from '../images/svg/calendar.svg';
import messages from '../images/svg/messages.svg';
import payments from '../images/svg/payments.svg';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a>
            <img src={dashboard} alt="dashboard" width="30px" />
            Dashboard
          </a>
        </li>
        <li>
          <a>
            <img src={tradingView} alt="tradingView" width="30px" />
            Tradeview
          </a>
        </li>
        <li>
          <a>
            <img src={fileManager} alt="fileManager" width="30px" />
            File manager
          </a>
        </li>
        <li>
          <a>
            <img src={analytics} alt="analytics" width="30px" />
            Traffic analyzer
          </a>
        </li>
        <li>
          <a>
            <img src={usersManager} alt="usersManager" width="30px" />
            Users manager
          </a>
        </li>
        <li>
          <a>
            <img src={calendar} alt="calendar" width="30px" />
            Calendar
          </a>
        </li>
        <li>
          <a>
            <img src={messages} alt="messages" width="30px" />
            Messages
            <span>8</span>
          </a>
        </li>
        <li>
          <a>
            <img src={payments} alt="payments" width="30px" />
            Payments
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
