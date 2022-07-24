import LeadSales from './LeadSales';
import Referrals from './Referrals';
import UsersActivity from './UsersActivity';
import LatestTichets from './LatestTichets';

const BodyConainer = () => {
  return (
    <div>
      <LeadSales />
      <Referrals />
      <UsersActivity />
      <LatestTichets />
    </div>
  );
};

export default BodyConainer;
