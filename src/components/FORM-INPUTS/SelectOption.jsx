import React, { forwardRef, useImperativeHandle } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography } from "@mui/material";

const SelectOption = forwardRef(({ id, label, value, rooms = [], guests=[], onChange,disabled = false }, ref) => {
  const [choice, setChoice] = React.useState("");

  const handleChange = (event) => {
    setChoice(event.target.value);
    // onChange(event.target.value);
    if (typeof onChange === "function") {
      onChange(event.target.value);
    }
  };

  useImperativeHandle(ref, () => ({ getSelectedValue: () => choice }));
  // console.log("rooms in select option", rooms);
  // console.log("choice in select option", choice);
  // console.log("guests in select option", guests);
  const items = rooms.length > 0 ? rooms : guests;
  return (
    // <Box
    //   sx={{ border: "2px solid gray", borderRadius: ".5rem", padding: "1rem" }}
    // >
    //   <FormControl sx={{ m: 1, minWidth: 120 }}>
    //     {rooms ? (
    //       <React.Fragment>
    //         <InputLabel id={label}>Rooms</InputLabel>
    //         <Select
    //           labelId={label}
    //           id={label}
    //           value={choice}
    //           label={label}
    //           onChange={handleChange}
    //         >
    //           {rooms?.map((room) => (
    //             <MenuItem
    //               value={room._id}
    //               sx={{
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //                 alignItems: "center",
    //                 px: 2,
    //                 position: "relative",
    //                 "&:hover .hoverImage": {
    //                   opacity: 1,
    //                 },
    //               }}
    //             >
    //               <Box>
    //                 <Typography variant="body1">{room.roomNumber}</Typography>
    //                 <Typography variant="body2" color="textSecondary">
    //                   {room.bedType}
    //                 </Typography>
    //               </Box>
    //               <Box
    //                 className="hoverImage"
    //                 sx={{
    //                   position: "absolute",
    //                   right: 0,
    //                   top: "50%",
    //                   transform: "translateY(-50%)",
    //                   width: 50,
    //                   height: 50,
    //                   opacity: 0,
    //                   transition: "opacity 0.3s ease",
    //                   borderRadius: 4,
    //                 }}
    //               >
    //                 <img
    //                   src={room.image[0]}
    //                   alt={room.roomNumber}
    //                   style={{
    //                     width: "100%",
    //                     height: "100%",
    //                     objectFit: "cover",
    //                   }}
    //                 />
    //               </Box>
    //             </MenuItem>
    //           ))}
    //         </Select>
    //         <FormHelperText>Select Room</FormHelperText>{" "}
    //       </React.Fragment>
    //     ) :
    //     guests ? (
    //       <React.Fragment>
    //         <InputLabel id={label}>{label}</InputLabel>
    //         <Select
    //           labelId={label}
    //           id={label}
    //           value={choice}
    //           label={label}
    //           onChange={handleChange}
    //         >
    //           {guests.map((guest=>  (
    //             <MenuItem value={guest}
    //             sx={{
    //               display: "flex",
    //               justifyContent: "space-between",
    //               alignItems: "center",
    //               px: 2,
    //               width:"1rem"
    //               // position: "relative",
    //               // "&:hover .hoverImage": {
    //               //   opacity: 1,
    //               // },
    //             }}
    //             >
    //              <Typography>{guest}</Typography>
    //               </MenuItem>
    //           )))}
    //         </Select>
    //         <FormHelperText>Select Guest Number</FormHelperText>{" "}
    //       </React.Fragment>
    //     )
    //   :""
    //   }
    //   </FormControl>
    // </Box>
  //   <Box sx={{ border: "2px solid gray", borderRadius: ".5rem", padding: "1rem" }}>
  //   <FormControl sx={{ m: 1, minWidth: 120 }}>
  //     <InputLabel id={label}>{label}</InputLabel>
  //     <Select
  //       labelId={label}
  //       id={label}
  //       value={choice}
  //       label={label}
  //       onChange={handleChange}
  //     >
  //       {rooms.length > 0 ? (
  //         rooms.map((room) => (
  //           <MenuItem
  //             key={room._id}
  //             value={room._id}
  //             sx={{
  //               display: "flex",
  //               justifyContent: "space-between",
  //               alignItems: "center",
  //               px: 2,
  //               position: "relative",
  //               "&:hover .hoverImage": {
  //                 opacity: 1,
  //               },
  //             }}
  //           >
  //             <Box>
  //               <Typography variant="body1">{room.roomNumber}</Typography>
  //               <Typography variant="body2" color="textSecondary">
  //                 {room.bedType}
  //               </Typography>
  //             </Box>
  //             <Box
  //               className="hoverImage"
  //               sx={{
  //                 position: "absolute",
  //                 right: 0,
  //                 top: "50%",
  //                 transform: "translateY(-50%)",
  //                 width: 50,
  //                 height: 50,
  //                 opacity: 0,
  //                 transition: "opacity 0.3s ease",
  //                 borderRadius: 4,
  //               }}
  //             >
  //               <img
  //                 src={room.image[0]}
  //                 alt={room.roomNumber}
  //                 style={{
  //                   width: "100%",
  //                   height: "100%",
  //                   objectFit: "cover",
  //                 }}
  //               />
  //             </Box>
  //           </MenuItem>
  //         ))
  //       ) : (
  //         guests.map((guest) => (
  //           <MenuItem
  //             key={guest}
  //             value={guest}
  //             sx={{
  //               display: "flex",
  //               justifyContent: "space-between",
  //               alignItems: "center",
  //               px: 2,
  //             }}
  //           >
  //             <Typography>{guest}</Typography>
  //           </MenuItem>
  //         ))
  //       )}
  //     </Select>
  //     <FormHelperText>Select {rooms.length > 0 ? "Room" : "Guest Number"}</FormHelperText>
  //   </FormControl>
  // </Box>
  <Box sx={{ border: "2px solid gray", borderRadius: ".5rem", padding: "1rem" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled={disabled}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={label}
          value={choice}
          label={label}
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem
              key={item._id || item}
              value={item._id || item}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
              }}
            >
              {rooms.length > 0 ? (
                <>
                  <Box>
                    <Typography variant="body1">{item.roomNumber}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.bedType}
                    </Typography>
                  </Box>
                  <Box
                    className="hoverImage"
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 50,
                      height: 50,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      borderRadius: 4,
                    }}
                  >
                    <img
                      src={item.image[0]}
                      alt={item.roomNumber}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </>
              ) : (
                <Typography>{item}</Typography>
              )}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select {rooms.length > 0 ? "Room" : "Guest Number"}</FormHelperText>
      </FormControl>
    </Box>
);

  
});

export default SelectOption;
