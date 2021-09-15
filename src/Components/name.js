import React from "react";
import { useState, useEffect } from "react";

const Name = () => {
  const [person, setPerson] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => setPerson(data.results[0].name.first));
  }, []);
  return (
    <>
      <h2>Hi from Name component! Here is your person: {person}</h2>
    </>
  );
};

export default Name;
