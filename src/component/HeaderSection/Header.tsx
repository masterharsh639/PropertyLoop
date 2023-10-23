import { Grid } from "@mui/material";
import "./header.css";
import logo from "../../assets/propertyloop_logo_black.svg";
const Header = () => {
  return (
    <Grid container xs={12} className="page-section header-section">
      <Grid xs={2}>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid xs={9} className="nav-bar">
        <p className="font-18">Pricing</p>
        <p className="font-18">Property Search</p>
        <p className="font-18">Letting Service</p>
        <p className="font-18">Property Management</p>
        <p className="font-18">Londlord Portal</p>
        <p className="font-18">Join As An Agent</p>
      </Grid>
    </Grid>
  );
};

export default Header;
