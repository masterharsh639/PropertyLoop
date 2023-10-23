import { Grid } from "@mui/material";
import "./WhatLords.css";
import PremiumHeading from "../../Container/PremiumHeading/PremiumHeading";

const WhatLord = () => {
  return (
    <Grid container className="landlord-section">
      <Grid item xs={12} className="font-48 landlord-title">
        What landlords think of PropertyLoop.
      </Grid>
      <Grid item xs={12} className="font-24 landlord-para">
        Watch our 60 seconds product demo.
      </Grid>
      <Grid item xs={12}>
        <button className="getStarted-button">Get Started</button>
      </Grid>
      <Grid item xs={6}>
        <PremiumHeading title="" paragraph=""/>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default WhatLord;
