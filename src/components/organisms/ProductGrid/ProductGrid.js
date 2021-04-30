import React from "react";
import PropTypes from "prop-types";

import { Root } from "./style";
import { GridRoot } from "components/atoms/Grid/style";
import Card from "components/molecules/Card/Card";
import CardBody from "components/molecules/CardBody/CardBody";
import CardMedia from "components/molecules/CardMedia/CardMedia";
import Heading from "components/atoms/Heading/Heading";
import ButtonWrapper from "components/atoms/Button/Button";

const ProductGrid = ({ products }) => (
  <Root>
    <GridRoot md={3}>
      {products.map((product) => (
        <Card key={product.id}>
          <CardMedia image={product.image} />
          <CardBody>
            <Heading>
              <h6>{product.title}</h6>
            </Heading>
            <p>{product.summary}</p>
            <div>
              <ButtonWrapper variant="link" color="primary">
                SAIBA MAIS
              </ButtonWrapper>
            </div>
          </CardBody>
        </Card>
      ))}
    </GridRoot>
  </Root>
);
ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    })
  ),
};

export default ProductGrid;
