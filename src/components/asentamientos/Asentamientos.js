import PropTypes from "prop-types";
import { Card, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

import useStyles from "./AsentamientosStyles";

const Asentamientos = ({
  asentamientos,
  selectedAsentamiento,
  setSelectedAsentamiento,
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedAsentamiento(event.target.value);
  };

  if (asentamientos.length < 1) return null;

  return (
    <>
      <p>Selecciona un asentamiento! ✔️</p>
      <Card className={classes.card}>
        <RadioGroup value={selectedAsentamiento} onChange={handleChange}>
          {asentamientos.map((asentamiento, index) => (
            <FormControlLabel
              key={`${index}_${asentamiento}`}
              control={<Radio />}
              label={asentamiento}
              value={asentamiento}
            />
          ))}
        </RadioGroup>
      </Card>
    </>
  );
};

Asentamientos.propTypes = {
  asentamientos: PropTypes.array.isRequired,
  selectedAsentamiento: PropTypes.string,
  setSelectedAsentamiento: PropTypes.func.isRequired,
};

export default Asentamientos;
