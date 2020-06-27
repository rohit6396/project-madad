import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Grid,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { dataApi } from "../actions";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#101726",
    color: "#ffffff",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  cardGrid: {
    padding: theme.spacing(2, 2, 2, 2),
  },
  btn: {
    color: "white",
  },
}));
const NewsCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(dataApi());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Grid container className={classes.cardGrid}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.heading}
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the
              content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" className={classes.btn}>
              View
            </Button>
            <Button size="small" className={classes.btn}>
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default NewsCard;