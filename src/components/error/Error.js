import useStyles from "./ErrorStyles";

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.error}>
      <h3>Error</h3>
      <p>
        Lo sentimos &#128546; El código postal no es de México o no es correcto.
        Intenta con otro &#128540;
      </p>
    </div>
  );
};

export default Error;
