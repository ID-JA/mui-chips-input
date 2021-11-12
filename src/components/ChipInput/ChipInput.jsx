import React from "react";
import PropTypes from "prop-types";

import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import FilledInput from "@mui/material/FilledInput ";
import InputLabel from "@mui/material/InputLabel";
import blue from "@mui/material/colors/blue";
import FormControl from "@mui/material/FormControl";
import Chip from "@mui/material/Chip";

const variants = {
  standard: Input,
  outlined: OutlinedInput,
  filled: FilledInput,
};

const keyCodes = {
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
};

function ChipInput() {
  return <FormControl></FormControl>;
}

export default ChipInput;
