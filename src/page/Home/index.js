import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../../componets/Product";
import "./index.scss";
import { chunk, size } from "lodash";

export default function Home(props) {
  const { products } = props;

  const listProducts = printProducts(products);

  return <Container className="page-home">{listProducts}</Container>;
}

function printProducts(products) {
  let componetsRender = [];

  if (size(products) === 0) {
    return (
      <Row>
        <h1>Sin resultados</h1>
      </Row>
    );
  } else {
    let chunkProducts = chunk(products, 3);

    chunkProducts.map((products, index) => {
      componetsRender.push(
        <Row key={index}>
          {products.map((product, indexp) => {
            return (
              <Col md={4} key={indexp}>
                <Product key={indexp} product={product} />
              </Col>
            );
          })}
        </Row>
      );
    });

    return componetsRender;
  }
} /*
<Row>
<Col md={4}>
  <Product />
</Col>
<Col md={4}>
  <Product />
</Col>
<Col md={4}>
  <Product />
</Col>
</Row>*/
