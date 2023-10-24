import { Grid } from "@mui/material";
import "./safehands.css";
import LogoSection from "../../Container/LogoSection/LogoSection";
import arla from "../../assets/arlaLogo.svg";
import PRS from "../../assets/prsLogo.svg";
import DPS from "../../assets/dpsLogo.svg";
import icoLogo from "../../assets/icoLogo.svg";
import propertymarkLogo from "../../assets/propertymarkLogo.svg";
import approvedLogo from "../../assets/approvedLogo.svg";

const SafeHands = () => {
  return (
    <Grid container xs={12} className="safehands-section">
      <Grid item xs={12} className="font-36" sx={{ textAlign: "center" }}>
        You’re in safe hands
      </Grid>
      <Grid
        item
        xs={12}
        className="font-24-400 safehand-para"
        sx={{ textAlign: "center" }}
      >
        We are members of the key governing bodies, so that you are fully
        protected.
      </Grid>
      <Grid display={"flex"}>
        <LogoSection logo={arla} title="ARLA property Mark Protected" />
        <LogoSection logo={PRS} title="Property Redress Scheme" />
        <LogoSection logo={DPS} title="Deposit Protection Service" />
        <LogoSection logo={icoLogo} title="Information Commisner Officer" />
        <LogoSection
          logo={propertymarkLogo}
          title="ARLA property Mark Protected"
        />
        <LogoSection logo={approvedLogo} title="APPROVED CODE Protected" />
      </Grid>
    </Grid>
  );
};

export default SafeHands;
