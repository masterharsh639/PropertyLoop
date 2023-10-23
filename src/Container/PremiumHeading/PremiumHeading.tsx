import { Grid } from "@mui/material";
import "./premiumheading.css";

interface PremiumHeadingProps {
  title: string;
  paragraph: string;
}
const PremiumHeading = ({ title, paragraph }: PremiumHeadingProps) => {
  return (
    <Grid container>
      <Grid item xs={12} className="premium-heading">
        {title}
      </Grid>
      <Grid item xs={12} className="premium-para">
        {paragraph}
      </Grid>
    </Grid>
  );
};

export default PremiumHeading;
