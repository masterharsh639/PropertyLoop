import { Grid } from "@mui/material";
import "./packages.css";

const Packages = () => {
  return (
    <Grid container xs={12} className="packages-container">
      <Grid item xs={4} className="font-24">
        See our lettings packages and fees
      </Grid>
      <Grid item xs={4}>
        <button className="see-pricing font-18">See Pricing</button>
      </Grid>
    </Grid>
  );
};

export default Packages;
