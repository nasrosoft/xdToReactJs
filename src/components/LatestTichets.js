import loadMore from '../images/svg/load_more.svg';

const LatestTichets = () => {
  const tickets = [
    {
      id: 4231852,
      discreption: 'Sed ut perspiciatis unde omnis iste',
    },
    {
      id: 4231852,
      discreption: 'Sed ut perspiciatis unde omnis iste natus',
    },
    {
      id: 4231852,
      discreption: 'totam rem aperiam',
    },
    {
      id: 4231852,
      discreption: 'Sed ut perspiciatis unde omnis iste natus',
    },
    {
      id: 4231852,
      discreption: 'totam rem aperiam',
    },
  ];
  console.log('tichets:', tickets);
  return (
    <div className="UsersActivity box box5">
      <span className="info">
        <p>Latest tickets</p>
        <p className="iInfo">
          <a href="#">ⓘ</a>
        </p>
      </span>
      <hr />
      <ul>
        {tickets.map((ticket) => {
          return (
            <div key={tickets.indexOf(ticket)}>
              <li className="ticketList">
                <span className="ticket">
                  Ticket
                  <span className="ticketId"> # {ticket.id}</span>
                </span>
                <p className="ticketDisc">{ticket.discreption}</p>
              </li>
              <hr />
            </div>
          );
        })}
      </ul>
      <div className="loadUsers">
        <a href="#">
          <img src={loadMore} alt="loadMore" className="usersLoad" />
        </a>
      </div>
    </div>
  );
};

export default LatestTichets;
