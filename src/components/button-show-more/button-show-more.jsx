import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

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

const mapStateToProps = (state) => ({
  amountCards: state.amountCards,
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick() {
    dispatch(ActionCreator.changeAmountCards());
  }
});

export {ButtonShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);
