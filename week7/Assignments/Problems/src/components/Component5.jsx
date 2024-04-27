import { useEffect, useState } from "react";

export function Component5() {
  const [githubData, setGithubData] = useState([]);

  async function fetchGit() {
    try {
      const res = await fetch(`https://api.github.com/users/KiranPolaki`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      return null;
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGit();
      if (data) {
        setGithubData(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="comp5-container">
      <div className="background git"></div>
      <div className="avatar-container">
        <img className="avatar" src={githubData.avatar_url} alt="pfp" />
      </div>
      <div className="details">
        <div className="name-box">
          <p className="name">{githubData.login}</p>
          <p className="age">
            <a
              className="github-link"
              href={githubData.html_url}
              target="_blank"
            >
              🔗
            </a>
          </p>
        </div>
      </div>
      <p className="place">My Github activity last 30 Days🔻</p>
      <img
        src="https://github-readme-activity-graph.vercel.app/graph?username=KiranPolaki&theme=material-palenight&bg_color=00000000&point=00000000&hide_border=true&custom_title= &area=true"
        className="graph-activity"
      ></img>
    </div>
  );
}
