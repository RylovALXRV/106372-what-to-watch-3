import React from "react";
import PropTypes from "prop-types";

const ButtonShowMore = ({onButtonClick}) => {
  return (
    <button
      className="catalog__button"
      type="button"
      onClick={onButtonClick}
    >Show more</button>
  );
};

ButtonShowMore.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};


export default ButtonShowMore;
