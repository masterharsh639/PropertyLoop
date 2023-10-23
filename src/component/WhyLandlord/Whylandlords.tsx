import { Grid } from "@mui/material";
import "./whylandlords.css";
import CardContainer from "../../Container/CardContainer/CardContainer";
import frames from "../../assets/frames.webp";
const Whylandlords = () => {
  return (
    <Grid container xs={12} className="landlords-section">
      <Grid item xs={12}>
        <p className="font-48 heading">Why landlords choose PropertyLoop?</p>
      </Grid>
      <Grid item xs={12} sm={12} className="cardList">
        <Grid xs={3}>
          <CardContainer
            title="Fewer Days on the market"
            paragraph="we have thousand of teenants on our platform ready and waiting the property like you"
          />
        </Grid>
        <Grid xs={3}>
          <CardContainer
            title="Fewer Days on the market"
            paragraph="we have thousand of teenants on our platform ready and waiting the property like you"
          />
        </Grid>
        <Grid xs={3}>
          <CardContainer
            title="Fewer Days on the market"
            paragraph="we have thousand of teenants on our platform ready and waiting the property like you"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <p className="property-text font-24">Your property, everywhere</p>
      </Grid>
      <Grid item xs={12}>
        <p className="frames">
          <img src={frames} alt="frame" className="frame"/>
        </p>
      </Grid>
    </Grid>
  );
};

export default Whylandlords;
