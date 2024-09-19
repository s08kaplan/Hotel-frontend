import React, { useState } from "react";
import useRooms from "../../custom-hooks/useRooms";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function RatingStatus({ roomRating, roomsRatings, id }) {
  const { user } = useSelector(state => state.auth)
    const { postRooms } = useRooms()
  const [rating, setRating] = useState(null);
//   console.log("rating component: ", roomRating);
//   console.log("rating component: ", roomsRatings);
console.log(user);
const handleRating = (e)=> {
    // console.log(typeof e.target.value);
    setRating(e.target.value)
    postRooms("rooms",id,rating)
}
  
  return (
    <Stack spacing={1}>
      {roomRating && user ? (
        <Rating name="half-rating" defaultValue={roomRating} precision={0.5} onClick={handleRating}
        
        />
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