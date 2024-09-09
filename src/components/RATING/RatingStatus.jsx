import React, { useState } from "react";
import useRooms from "../../custom-hooks/useRooms";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function RatingStatus({ roomRating, roomsRatings, id }) {
    const { postRooms } = useRooms()
  const [rating, setRating] = useState(null);
//   console.log("rating component: ", roomRating);
//   console.log("rating component: ", roomsRatings);

const handleRating = (e)=> {
    // console.log(typeof e.target.value);
    setRating(e.target.value)
    postRooms(id,rating)
}
  
  return (
    <Stack spacing={1}>
      {roomRating ? (
        <Rating name="half-rating" defaultValue={roomRating} precision={0.5} onClick={handleRating} />
      ) : (
        <Rating
          name="half-rating-read"
          defaultValue={roomsRatings}
          precision={0.5}
          readOnly
        />
      )}
    </Stack>
  );
}
