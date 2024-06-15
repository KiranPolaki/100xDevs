"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data);
      });
  }, []);

  return (
    <>
      <p>{data.email}</p>
      <p>{data.name}</p>
    </>
  );
}
