import LeadSales from './LeadSales';
import Referrals from './Referrals';
import UsersActivity from './UsersActivity';
import LatestTichets from './LatestTichets';

const BodyConainer = () => {
  return (
    <>
      <LeadSales />
      <Referrals />
      <UsersActivity />
      <LatestTichets />
    </>
  );
};

export default BodyConainer;
