import { Card, CardContent, Grid, Typography } from "@mui/material";
import "./cardcontainer.css";

interface CardProps {
  title: string;
  paragraph: string;
}

const CardContainer = ({ title, paragraph }: CardProps) => {
  return (
    <Grid container>
      <Card sx={{ maxWidth: 345, height: 180 }} className="detail-card">
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "1.5rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "1rem",
            }}
          >
            {paragraph}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardContainer;
