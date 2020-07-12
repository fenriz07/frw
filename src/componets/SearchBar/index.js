import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Search } from "../../api/search";
import "./index.scss";

export default function SearchBar(props) {
  const refTime = useRef(null);

  const refInput = useRef(null);

  const { setProducts } = props;

  const onChange = (e) => {
    if (refTime.current) {
      clearTimeout(refTime.current);
    }

    refTime.current = setTimeout(() => {
      Search(refInput.current.value)
        .then((products) => {
          console.log(products);
          setProducts(products);
        })
        .catch(() => {
          console.log("error en el servidor");
        });
    }, 500);
  };

  return (
    <div className="SearchBar">
      <Form>
        <Form.Control
          type="text"
          placeholder="¿Qué estás buscando?"
          name="searchtext"
          onKeyUp={onChange}
          ref={refInput}
        />
      </Form>
    </div>
  );
}
