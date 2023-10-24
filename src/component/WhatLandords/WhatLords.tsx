import { Grid } from "@mui/material";
import "./WhatLords.css";
import videoPic from "../../assets/videoPic.png";

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
        <img src={videoPic} alt="videoPic" className="videoPic" />
      </Grid>
      <Grid item xs={12}>
        <button className="getStarted-button">Get Started</button>
      </Grid>
      <Grid item xs={12} className="landlord-saving">
        <Grid item xs={4}>
          <p className="font-36">
            See how much you can save with PropertyLoop.
          </p>
          <p className="font-18">
            Choose PropertyLoop for a better experience and save over 50% in
            fees with no hidden charges.
          </p>
        </Grid>
        <Grid item xs={4}>
          <p className="font-36">Landlord saving</p>
          <p className="font-18">
            Monthly rental <strong>£500</strong> based on a{" "}
            <strong>12 month</strong>tenancy
          </p>
          <p className="font-18">Learn how we estimate your saving</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhatLord;
