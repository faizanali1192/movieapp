import React from "react";
import { Wrapper } from "./Button.styles";
//prop types
import PropTypes from "prop-types";
const Button = ({ text, callback }) => <Wrapper>{text}</Wrapper>;
Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
