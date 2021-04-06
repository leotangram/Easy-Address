import { useState } from "react";
import { Button, Container } from "@material-ui/core";

import useStyles from "./AppStyles";
import Form from "./components/form/Form";
import Asentamientos from "./components/asentamientos/Asentamientos";

function App() {
  const classes = useStyles();

  const [asentamientos, setAsentamientos] = useState([]);
  const [selectedAsentamiento, setSelectedAsentamiento] = useState("");
  const [infoConfirmed, setInfoConfirmed] = useState(false);

  const resetInfo = () => {
    setInfoConfirmed(false);
    setSelectedAsentamiento("");
    setAsentamientos([]);
  };

  return (
    <Container className="App">
      <h1>EASY ADDRESS</h1>
      {!infoConfirmed && (
        <>
          <Form setAsentamientos={setAsentamientos} />
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
