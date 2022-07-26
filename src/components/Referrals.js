const referralsData = [
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
  {
    profileImage: '../images/img/Profile_image.png',
    profileName: 'Francesca Metts',
    referral: 21.1,
  },
];
const Referrals = () => {
  return (
    <div className="ReferralBar">
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
      <hr />
    </div>
  );
};

export default Referrals;
