import axios from "axios";

// * Server side data fetching
async function fetchData() {
  const res = await axios.get("http://localhost:3000/api/user");
  return res.data;
}

export default async function User() {
  const data = await fetchData();
  return (
    <>
      <p>{data.name}</p>
      <p>{data.email}</p>
    </>
  );
}
