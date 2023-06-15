import React, { memo } from "react";
import PropTypes from "prop-types";
import { CardStyle } from "./style";

const Card = memo((props) => {
  const { radius = 3, padding = 10, maxHeight = false } = props;
  return (
    <CardStyle radius={radius} padding={padding} maxHeight={maxHeight}>
      {props.children}
    </CardStyle>
  );
});

Card.propTypes = {
  radius: PropTypes.number,
};

export default Card;
