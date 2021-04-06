import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Grid, TextField } from "@material-ui/core";

import { getInfoByPostal } from "../../services/addressServices";
import useForm from "../../hook/useForm";
import useStyles from "./FormStyles";
import Error from "../error/Error";

const Form = ({ country, infobyPostal, setAsentamientos, setInfobyPostal }) => {
  const classes = useStyles();
  const { handleChange, inputs, fetchForm } = useForm({
    cp: 11000,
    ciudad: "",
    estado: "",
    municipio: "",
    pais: "",
    tipoAsentamiento: "",
  });
  const [error, setError] = useState(false);
  const [succesInfo, setSuccesInfo] = useState(false);

  const {
    ciudad,
    estado,
    cp,
    municipio,
    pais,
    tipo_asentamiento: tipoAsentamiento,
  } = inputs;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await getInfoByPostal(country, cp);
      setAsentamientos(data?.response?.asentamiento);
      delete data.response.asentamientos;
      fetchForm(data.response);
      setInfobyPostal(true);
      setError(false);
      setSuccesInfo(true);
    } catch (error) {
      setError(true);
      setSuccesInfo(false);
    }
  };

  return (
    <>
      {!succesInfo && <p>Ingresa tu código postal</p>}
      <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
          {error && <Error />}
          <Grid container spacing={3}>
            <Grid item xs={12} md={infobyPostal ? 6 : 12}>
              <TextField
                className={classes.input}
                disabled={succesInfo}
                name="cp"
                label="Cógio postal"
                onChange={handleChange}
                type="number"
                value={cp}
                variant="outlined"
              />
            </Grid>
            {infobyPostal && (
              <>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.input}
                    disabled
                    label="Ciudad"
                    name="ciudad"
                    onChange={handleChange}
                    type="text"
                    value={ciudad}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.input}
                    disabled
                    label="Estado"
                    name="estado"
                    onChange={handleChange}
                    type="text"
                    value={estado}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.input}
                    disabled
                    label="Municipio"
                    name="municipio"
                    onChange={handleChange}
                    type="text"
                    value={municipio}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.input}
                    disabled
                    label="Pais"
                    name="pais"
                    onChange={handleChange}
                    type="text"
                    value={pais}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.input}
                    disabled
                    label="Tipo asentamiento"
                    name="tipoAsentamiento"
                    onChange={handleChange}
                    type="text"
                    value={tipoAsentamiento}
                    variant="filled"
                  />
                </Grid>
              </>
            )}
          </Grid>
          {!succesInfo && (
            <Button
              className={classes.button}
              color="primary"
              type="submit"
              variant="contained"
            >
              Buscar datos
            </Button>
          )}
        </form>
      </Card>
    </>
  );
};

Form.propTypes = {
  country: PropTypes.string.isRequired,
  infobyPostal: PropTypes.bool.isRequired,
  setAsentamientos: PropTypes.func.isRequired,
  setInfobyPostal: PropTypes.func.isRequired,
};

export default Form;
