import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import useStyles from "./CountrySelectorStyles";

const CountrySelector = ({ country, setCountry }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <h3>Selecciona tu país</h3>
      <FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">
          Selecciona tu país
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          value={country}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>----</em>
          </MenuItem>
          <MenuItem value="mx">México</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

CountrySelector.propTypes = {
  country: PropTypes.string,
  setCountry: PropTypes.func.isRequired,
};

export default CountrySelector;
