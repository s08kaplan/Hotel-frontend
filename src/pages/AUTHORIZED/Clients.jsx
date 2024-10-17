import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import useAxios from "../../custom-hooks/useAxios";

const Clients = () => {
  const { axiosWithToken } = useAxios();

  const getClients = async () => {
    try {
      const { data } = await axiosWithToken("users");
      console.log(data);
    } catch (error) {
      console.error("Fetching clients info failed: ", error);
    }
  };

  useEffect(() => {}, []);
       getClients()
  return (
    <Box>
      <Box>
        
      </Box>
    </Box>
  );
};

export default Clients;
