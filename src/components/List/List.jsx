import React, { useState } from "react";
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

const List = ({places}) => {
  const classes = useStyles();
  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState("0");
  console.log(places);

  const types = {
    Restaurant: "restaurant",
    Hotels: "hotels",
    Attractions: "attractions",
  };

  const ratings = {
    0: "All",
    3: "Above 3.0",
    4: "Above 4.0",
    4.5: "Above 4.5",
  };

  // const places = [
  //   { name: "Cool Place" },
  //   { name: "Best Beer" },
  //   { name: "Best Steak" },
  //   { name: "Cool Place" },
  //   { name: "Best Beer" },
  //   { name: "Best Steak" },
  //   { name: "Cool Place" },
  //   { name: "Best Beer" },
  //   { name: "Best Steak" },
  // ];

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
          <Grid item xs={12} key={i}>
            <PlaceDetail place={place} />
          </Grid>
        ))}
      </Grid>

    </div>
  );
};

export default List;
