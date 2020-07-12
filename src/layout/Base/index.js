import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import SearchBar from "../../componets/SearchBar";
import "./base.scss";

import Home from "../../page/Home";

export default function Base() {
  const [products, setProducts] = useState(null);

  return (
    <Container fluid>
      <Row className="header-bar">
        <div className="logo">
          <img src={logo} alt="lider-logo" />
        </div>
        <SearchBar setProducts={setProducts} />
      </Row>
      <Row className="page-area">
        <Home products={products} />
      </Row>
    </Container>
  );
}
