import leadMore from '../images/svg/load_more.svg';

const referralsData = [
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Malcolm Quaday',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Lindsey Rivard',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Elizabeth Hurton',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Albert Pollock',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 9.6,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Malcolm Quaday',
    referral: 9.5,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Lindsey Rivard',
    referral: 8.9,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Elizabeth Hurton',
    referral: 8.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Albert Pollock',
    referral: 7.1,
  },
];
const Referrals = () => {
  return (
    <div className="ReferralBar box box3">
      <div className="referelProfile">
        {referralsData.map((profile) => {
          return (
            <div key={referralsData.indexOf(profile)} className="EatchReferral">
              <img
                // src={require(profile.profileImage)}
                src={require('../images/img/Profile_image.png')}
                alt={profile.profileName}
              />
              <h6>{profile.profileName}</h6>
              <p>{profile.referral}k</p>
            </div>
          );
        })}
      </div>
      <div>
        <img src={leadMore} alt="leadMore" className="leadMore" />
      </div>
    </div>
  );
};

export default Referrals;
