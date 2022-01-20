import React from "react";

const PlaceDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>pd works!</p>
    </div>
  );
};

export default PlaceDetail;
