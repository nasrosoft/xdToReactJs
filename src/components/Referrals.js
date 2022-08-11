import loadMore from '../images/svg/load_more.svg';

const referralsData = [
  {
    profileImage: '../images/img/09w.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/30w.png',
    profileName: 'Malcolm Quaday',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Oval.png',
    profileName: 'Lindsey Rivard',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Oval-1.png',
    profileName: 'Elizabeth Hurton',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Oval-2.png',
    profileName: 'Albert Pollock',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Oval-3.png',
    profileName: 'Francesca Metts',
    referral: 9.6,
  },
  {
    profileImage: '../images/img/Oval-4.png',
    profileName: 'Malcolm Quaday',
    referral: 9.5,
  },
  {
    profileImage: '../images/img/Oval-5.png',
    profileName: 'Lindsey Rivard',
    referral: 8.9,
  },
  {
    profileImage: '../images/img/Oval-6.png',
    profileName: 'Elizabeth Hurton',
    referral: 8.1,
  },
  {
    profileImage: '../images/img/Oval-7.png',
    profileName: 'Albert Pollock',
    referral: 7.1,
  },
  {
    profileImage: '../images/img/Oval-5.png',
    profileName: 'Albert Pollock',
    referral: 7.1,
  },
  {
    profileImage: '../images/img/Oval-4.png',
    profileName: 'Malcolm Quaday',
    referral: 9.5,
  },
  {
    profileImage: '../images/img/Oval-5.png',
    profileName: 'Lindsey Rivard',
    referral: 8.9,
  },
  {
    profileImage: '../images/img/Oval-4.png',
    profileName: 'Malcolm Quaday',
    referral: 9.5,
  },
  {
    profileImage: '../images/img/Oval-5.png',
    profileName: 'Lindsey Rivard',
    referral: 8.9,
  },
];
const Referrals = () => {
  return (
    <div className="ReferralBar box box3">
      <span className="info">
        <p>Referrals</p>
        <p className="iInfo">
          <a href="#">ⓘ</a>
        </p>
      </span>
      <hr />
      <div className="referelProfile">
        {referralsData.map((profile) => {
          return (
            <div key={referralsData.indexOf(profile)} className="EatchReferral">
              <img
                // src={require(profile.profileImage)}
                src={'https://i.pravatar.cc/300'}
                alt={profile.profileName}
                className="imgProfile"
              />
              <h6>{profile.profileName}</h6>
              <p>{profile.referral}k</p>
            </div>
          );
        })}
      </div>
      <div className="load">
        <a href="#">
          <img src={loadMore} alt="loadMore" className="loadMore" />
        </a>
      </div>
    </div>
  );
};

export default Referrals;
