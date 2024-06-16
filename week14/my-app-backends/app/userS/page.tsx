import client from "@/db";

// * Server side data fetching
async function fetchData() {
  const user = await client.user.findFirst();
  return {
    email: user?.email,
    password: user?.password,
  };
}

export default async function User() {
  const data = await fetchData();
  return (
    <>
      <p>{data?.email}</p>
      <p>{data?.password}</p>
    </>
  );
}
