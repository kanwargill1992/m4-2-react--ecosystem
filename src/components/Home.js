import React from "react";
import ListingGrid from "./Listinggrid";

const Homepage = (props) => {
  return (
    <div>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </p>
      <ListingGrid item1={props.item} />
    </div>
  );
};

export default Homepage;
