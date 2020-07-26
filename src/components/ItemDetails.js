import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: -35px;
  align-items: center;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Image1 = styled.img`
  max-width: 300px;
  border-radius: 10px;
`;

const Image2 = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const LatinName = styled.p`
  font-style: italic;
  text-align: center;
  margin-top: -10px;
  color: blue;
`;

const Descript = styled.p`
  text-align: center;
  font-size: 17px;
`;

const Origin = styled.p`
  text-align: center;
  margin-top: -10px;
`;

const Btn = styled.button`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 50%;

  background-color: #008cba;
  border: none;
  border-radius: 5px;
  color: white;
`;

const StoreName = styled.p`
  margin-left: 10px;
`;

const ItemDetail = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = sellers[item.sellerId];
  console.log("items", seller);
  return (
    <Wrapper>
      <Image1 src={item.imageSrc} alt={item.name} />
      <Wrapper1>
        <Name>{item.name}</Name>
        <LatinName>{item.latinName}</LatinName>
        <Descript>{item.description}</Descript>
        <Origin>{item.countryOfOrigin}</Origin>
        <Btn disabled={item.quantity > 0 ? false : true}>
          {item.quantity > 0 ? `${item.price}$-Buy now` : "Out of stock"}
        </Btn>
        <Wrapper2>
          <Image2 src={seller.avatarSrc} alt={seller.id} />
          <StoreName>{`Sold by: ${seller.storeName}`}</StoreName>
        </Wrapper2>
      </Wrapper1>
    </Wrapper>
  );
};

export default ItemDetail;
