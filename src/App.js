import { useState } from "react";
import { Button, Container } from "@material-ui/core";

import useStyles from "./AppStyles";
import Form from "./components/form/Form";
import Asentamientos from "./components/asentamientos/Asentamientos";
import CountrySelector from "./components/country-selector/CountrySelector";

function App() {
  const classes = useStyles();

  const [asentamientos, setAsentamientos] = useState([]);
  const [selectedAsentamiento, setSelectedAsentamiento] = useState("");
  const [infoConfirmed, setInfoConfirmed] = useState(false);
  const [country, setCountry] = useState("");
  const [infobyPostal, setInfobyPostal] = useState(false);

  const resetInfo = () => {
    setInfoConfirmed(false);
    setSelectedAsentamiento("");
    setAsentamientos([]);
    setInfobyPostal(false);
    setCountry("");
  };

  return (
    <Container className="App">
      <h1>EASY ADDRESS</h1>
      {!infobyPostal && (
        <CountrySelector country={country} setCountry={setCountry} />
      )}
      {!infoConfirmed && country && (
        <>
          <Form
            country={country}
            infobyPostal={infobyPostal}
            setAsentamientos={setAsentamientos}
            setInfobyPostal={setInfobyPostal}
          />
          {asentamientos && (
            <Asentamientos
              asentamientos={asentamientos}
              setSelectedAsentamiento={setSelectedAsentamiento}
            />
          )}
          {selectedAsentamiento && (
            <Button
              className={classes.confirmButton}
              color="primary"
              fullWidth
              onClick={() => setInfoConfirmed(true)}
              variant="contained"
            >
              Confirma tu información
            </Button>
          )}
        </>
      )}
      {infoConfirmed && (
        <>
          <h3>¡Tu información ha sido confirmada! 🎉🎉🎉🎉</h3>
          <p>¿Deseas realizar otra busqueda?</p>
          <Button
            className={classes.confirmButton}
            color="primary"
            onClick={resetInfo}
            variant="contained"
          >
            Realizar otra búsqueda
          </Button>
        </>
      )}
    </Container>
  );
}

export default App;
