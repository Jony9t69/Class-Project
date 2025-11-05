import React, { useEffect, useState } from "react";
import Categoriesnavbar from "./Categoriesnavbar";

function Picture() {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Location.json")
      .then((res) => res.json())
      .then((data) => setLocation(data))
      .catch((error) => console.error("Error loading data:", error))
      .finally(() => setLoading(false));
  }, []);

  console.log(location);

 const categories = ["ALL", ...new Set(location.map((m) => m.category))];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Categoriesnavbar categories={categories} />
    </div>
  );
}

export default Picture;
