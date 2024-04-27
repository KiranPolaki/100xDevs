/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function Component1({ name, age, place }) {
  return (
    <>
      <div className="comp1-container">
        <div className="background"></div>
        <div className="avatar-container">
          <img
            className="avatar"
            src="https://assets-global.website-files.com/65217fd9e31608b8b68141ba/65217fd9e31608b8b6814492_-9ojwcB1tqVmdclia_Sx-oevPA3tjR3E4Y4Qtywk7fp90800zZijuZNz7dsIGPdmsNlpnfq3l1ayZSh1qWraCQqpIuIcNpEuRBg9tW96irdFURf6DDqWgjZ2EKAbqng6wgyhmrxb5fPt20yMRrWwpcg.png"
            alt="pfp"
          />
        </div>
        <div className="details">
          <div className="name-box">
            <p className="name">{name}</p>
            <p className="age">{age}</p>
          </div>
        </div>
        <p className="place">{place}</p>
        <div className="line"></div>
        <div className="profile-stats">
          <ProfileComponent name={"Followers"} number={80000} />
          <ProfileComponent name={"Likes"} number={80000} />
          <ProfileComponent name={"Photos"} number={1000} />
        </div>
      </div>
    </>
  );
}

function ProfileComponent({ name, number }) {
  return (
    <>
      <div>
        <h4 className="number">{number}</h4>
        <p className="value">{name}</p>
      </div>
    </>
  );
}
