import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetail from "../PlaceDetails/PlaceDetail.jsx";

import useStyles from "./styles.js";

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  const types = {
    Restaurants: "restaurants",
    Hotels: "hotels",
    Attractions: "attractions",
  };

  const ratings = {
    0: "All",
    3: "Above 3.0",
    4: "Above 4.0",
    4.5: "Above 4.5",
  };

  const typeOpt = Object.keys(types).map((key) => {
    return <MenuItem value={types[key]}>{key}</MenuItem>;
  });

  const ratingOpt = Object.keys(ratings).map((key) => {
    return <MenuItem value={key}>{ratings[key]}</MenuItem>;
  });

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Restaurant, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              {typeOpt}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              {ratingOpt}
            </Select>
          </FormControl>

          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} item xs={12} key={i}>
                <PlaceDetail
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
