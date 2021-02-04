import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import drivers from "./data/driver-data";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

const useStyles = makeStyles((theme) => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: "auto",
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
  }),
  titleLabels: {
    marginLeft: "100px",
  },
}));
export default function SimpleSlider() {
  const styles = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className={styles.root}>
      <h2 className={styles.titleLabels}>Grand Prix Start Order</h2>
      <Slider {...settings}>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#5c6bc0" }}
                  >
                    {drivers[0].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#5c6bc0" }} />
                  {drivers[0].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[0].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[0].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[0].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#64ffda" }}
                  >
                    {drivers[1].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#64ffda" }} />
                  {drivers[1].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[1].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[1].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[1].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#5c6bc0" }}
                  >
                    {drivers[2].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#5c6bc0" }} />
                  {drivers[2].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[2].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[2].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[2].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#64ffda" }}
                  >
                    {drivers[3].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#64ffda" }} />
                  {drivers[3].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[3].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[3].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[3].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#f44336" }}
                  >
                    {drivers[4].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#f44336" }} />
                  {drivers[4].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[4].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[4].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[4].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#f44336" }}
                  >
                    {drivers[5].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#f44336" }} />
                  {drivers[5].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[5].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[5].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[5].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#ff7043" }}
                  >
                    {drivers[6].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#ff7043" }} />
                  {drivers[6].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[6].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[6].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[6].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#ff7043" }}
                  >
                    {drivers[7].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#ff7043" }} />
                  {drivers[7].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[7].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[7].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[7].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#43a047" }}
                  >
                    {drivers[8].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#43a047" }} />
                  {drivers[8].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[8].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[8].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[8].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#0288d1" }}
                  >
                    {drivers[9].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#0288d1" }} />
                  {drivers[9].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[9].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[9].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[9].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#0288d1" }}
                  >
                    {drivers[10].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#0288d1" }} />
                  {drivers[10].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[10].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[10].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[10].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#43a047" }}
                  >
                    {drivers[11].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#43a047" }} />
                  {drivers[11].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[11].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[11].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[11].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#01579b" }}
                  >
                    {drivers[12].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#01579b" }} />
                  {drivers[12].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[12].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[12].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[12].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#dd2c00" }}
                  >
                    {drivers[13].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#dd2c00" }} />
                  {drivers[13].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[13].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[13].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[13].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#01579b" }}
                  >
                    {drivers[14].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#01579b" }} />
                  {drivers[14].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[14].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[14].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[14].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#dd2c00" }}
                  >
                    {drivers[15].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#dd2c00" }} />
                  {drivers[15].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[15].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[15].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[15].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#00e5ff" }}
                  >
                    {drivers[16].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#00e5ff" }} />
                  {drivers[16].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[16].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[16].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[16].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#757575" }}
                  >
                    {drivers[17].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#757575" }} />
                  {drivers[17].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[17].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[17].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[17].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#00e5ff" }}
                  >
                    {drivers[18].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#00e5ff" }} />
                  {drivers[18].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[18].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[18].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[18].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  <Avatar
                    className={styles.titleLabels}
                    style={{ backgroundColor: "#757575" }}
                  >
                    {drivers[19].abrv}
                  </Avatar>
                  <DriveEtaIcon style={{ color: "#757575" }} />
                  {drivers[19].name}
                </Typography>
                <Typography variant="body2" component="h6">
                  Order: {drivers[19].position}
                </Typography>
                <Typography variant="body2" component="h6">
                  Team: {drivers[19].team}
                </Typography>
                <Typography variant="body2" component="h6">
                  Time: {drivers[19].time}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Slider>
    </div>
  );
}
