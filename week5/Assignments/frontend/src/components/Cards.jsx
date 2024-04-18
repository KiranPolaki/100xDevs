/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Cards({ name, description, creds, interests }) {
  return (
    <>
      <div className="card-container">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="interests-box">
          <h4>Interests</h4>
          {interests.map((interest) => (
            <p key={interest?.id}>{interest?.name}</p>
          ))}
        </div>
        <div className="cred-box">
          {creds.map((cred) => {
            return (
              <button key={cred.id}>
                <a href={cred.link}>{cred.name}</a>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { Cards };
