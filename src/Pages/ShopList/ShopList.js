import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import ProductHeaderFilter from "../ProductHeaderFIlter/ProductHeaderFilter";
import ShopItem from "./ShopItem";
import NavbarMenu from "../Header/NavbarMenu";
import Footer from "../FooterComponent/Footer";

const ShopList = () => {
  const data = [
    {
      img: "https://i.ibb.co/ggJmJLw/sofawithgadget.png",
      name: "Accumasan tincidunt",
      price: 26,
      details:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis. 25",
    },
    {
      img: "https://i.ibb.co/ggJmJLw/sofawithgadget.png",
      name: "In nulla",
      price: 26,
      details:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis. 25",
    },
    {
      img: "https://i.ibb.co/ggJmJLw/sofawithgadget.png",
      name: "In nulla",
      price: 26,
      details:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis. 25",
    },
    {
      img: "https://i.ibb.co/ggJmJLw/sofawithgadget.png",
      name: "In nulla",
      price: 26,
      details:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis. 25",
    },
  ];
  return (
    <div className="shopList">
      <NavbarMenu/>
      <Container>
        <ProductHeaderFilter />
        <Row className="">
          {data.map((product) => (
            <ShopItem products={product} />
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default ShopList;
