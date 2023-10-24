import { Grid } from "@mui/material";
import "./logosection.css";

interface LogoSectionProps {
  logo: string;
  title: string;
}

const LogoSection = ({ logo, title }: LogoSectionProps) => {
  return (
    <Grid container xs={4} className="logo-section">
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <img src={logo} alt="logo" className="logo-section" />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }} className="font-12">
        {title}
      </Grid>
    </Grid>
  );
};

export default LogoSection;
