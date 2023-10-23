import { Grid } from "@mui/material";
import "./reactangle.css";

const Reactangle = () => {
  return (
    <Grid container sm={12} md={12} xl={12} className="page-section reactangle">
      <Grid item xs={4}>
        <p className="font-24">How much rent can you achieve?</p>
      </Grid>
      <Grid item xs={4}>
        <input
          type="text"
          placeholder="Enter address (e.g Flat 221)"
          className="input-field"
        />{" "}
      </Grid>
      <Grid item xs={3}>
        <button className="font-18 button-css">Instant valuation</button>
      </Grid>
    </Grid>
  );
};

export default Reactangle;
