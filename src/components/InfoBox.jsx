import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../style/InfoBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const img_url =
    "https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Hot_img =
    "https://www.treehugger.com/thmb/_lhgtC-6L7fxeumvXVjCIKRODlI=/1000x664/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
  const Cold_img =
    "https://th.bing.com/th/id/OIP.AXfgd8hNRf5fFK9NrArbIQAAAA?rs=1&pid=ImgDetMain";
  const Rain_img =
    "https://th.bing.com/th/id/R.03cacf893f9a941c4b5df9a04cdcd1e3?rik=rGWdPmmkQod3Yw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-RHsgn9-zK0Y%2fVXwAIx5vAKI%2fAAAAAAAABH4%2fw0jKimeEpE0%2fs1600%2frain-42.jpg&ehk=Q89teR5BSaoCl7Ie%2fJQhxw6UF8rFWUBD6lUM9PKDnAk%3d&risl=&pid=ImgRaw&r=0";

  return (
    <>
      <div>
        <div className="InfoBox">
          <Card sx={{ maxWidth: 345 }} className="extra">
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                ? Rain_img
                : info.temp > 15
                ? Hot_img
                : Cold_img
              }
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {info.city} &nbsp;
                {
                  info.humidity > 80
                  ? <ThunderstormIcon/>
                  : info.temp > 15
                  ? <WbSunnyIcon/>
                  : <AcUnitIcon/>
                
              }
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                <div>
                  <p>Temp: {info.temp}</p>
                  <p>Max Temp : {info.tempMax}</p>
                  <p>Min Temp: {info.tempMin}</p>
                  <p>
                    The weather can described as{" "}
                    <i>
                      <b> {info.weather_des} </b>
                    </i>{" "}
                    and feels like <b>{info.humidity}</b>
                  </p>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
