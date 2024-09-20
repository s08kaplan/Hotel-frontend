import React, { useState } from "react";
import useRooms from "../../custom-hooks/useRooms";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function RatingStatus({ roomRating, readOnlyStatus, roomId }) {
  const { user } = useSelector(state => state.auth)
  const { roomDetail } = useSelector(state => state.room)
    const { updateRooms } = useRooms()
  const [ratings, setRatings] = useState(0);
  // console.log("rating component: ", roomRating);
  // console.log("rating component: ", roomsRatings);
  console.log("rating component rooms: ", roomDetail);
  console.log("rating component rooms: ", roomId);
console.log(user);
const handleRating = (e, newValue) => {

  const ratingValue = Number(newValue);

  const newRating = {
    value: ratingValue,
    userId: user?._id, 
  };

  setRatings(ratingValue);

  updateRooms("rooms", roomId, { ratings: [newRating] });
};

  return (
    <Stack spacing={1}>
      {roomId && user ? (
        <Rating name="half-rating" defaultValue={roomRating} precision={0.5} onChange={handleRating}
        
        />
      ) : (
        <Rating
          name="half-rating-read"
          defaultValue={readOnlyStatus}
          precision={0.5}
          readOnly
        />
      )}
    </Stack>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";
// import { useSelector } from "react-redux";

// export default function RatingStatus({ roomId, readOnlyStatus }) {
//   const [value, setValue] = React.useState(0);
//   const { roomDetail } = useSelector((state) => state.room);

//   console.log("rating", roomDetail);
//   console.log(value)

//   return (
//     <Box sx={{ "& > legend": { mt: 2 } }}>
//       {roomId ? (
//         <Rating
//           name="simple-controlled"
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         />
//       ) : (
//         <Rating name="read-only" value={readOnlyStatus} readOnly />
//       )}
//     </Box>
//   );
// }