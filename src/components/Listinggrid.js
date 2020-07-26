import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15),
    0px 1px 0.5px rgba(0, 0, 0, 0.075);
  border-radius: 10px;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;

const Para = styled.p`
  text-align: center;
  font-size: 20px;
`;

const Para1 = styled.p`
  text-align: center;
  font-style: italic;
`;

const ListingGrid = (props) => {
  return Object.values(props.item1).map((fruit) => {
    return (
      <Wrapper>
        <Card key={fruit.id}>
          <Link to={`/items/${fruit.id}`}>
            <Image src={fruit.imageSrc} alt="Fruit"></Image>
          </Link>
          <Para>{fruit.name}</Para>
          <Para1>{fruit.latinName}</Para1>
        </Card>
      </Wrapper>
    );
  });
};

export default ListingGrid;
