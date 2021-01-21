import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import Video from "./assets/video.mp4";

const useStyles = makeStyles((theme) => ({
  boot: {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <>
      <video autoPlay muted loop className={classes.boot}>
        <source src={Video} type="video/mp4" />
      </video>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </>
  );
}
