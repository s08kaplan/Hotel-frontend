import React from "react";
import { useParams } from "react-router-dom";
import { memberImages } from "../../assets/PyScript-members/memberImages";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AboutDetails = () => {
  const { id } = useParams();
  const desiredDetail = memberImages.find((item) => item.id == id);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {
        <Stack key={desiredDetail.id} sx={{marginTop:"1rem", padding:"1rem", justifyContent:"center", alignItems:"center",  gap:"1rem"}}>
          <Typography variant="h4" sx={{textAlign:"center"}}>{desiredDetail.info}</Typography>
          <img src={desiredDetail.imageAddress} alt="member-image" width={500} />
          <Typography className="details">{desiredDetail.details}</Typography>
        </Stack>
      }
    </Box>
  );
};

export default AboutDetails;
