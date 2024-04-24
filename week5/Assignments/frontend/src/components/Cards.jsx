/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Cards({ name, description, linkedin, twitter, github, interests }) {
  return (
    <>
      <div className="card-container">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="interests-box">
          <h4>Interests</h4>
          <p>{interests}</p>
        </div>
        <div className="cred-box">
          <button>
            <a href={linkedin}>Linkedin</a>
          </button>
          <button>
            <a href={twitter}>twitter</a>
          </button>
          <button>
            <a href={github}>github</a>
          </button>
        </div>
      </div>
    </>
  );
}

export { Cards };
