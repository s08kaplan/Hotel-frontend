import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const RoomCard = ({detail}) => {
  console.log(detail);
  return (
    <Box>
    <Stack>
      <img src="" alt="" />
      <Box>
          <Box>wifi</Box>
          <Box>breakfast</Box>
          <Box>rating</Box>
      </Box>
    </Stack>
    <Stack>
      <Box>
          <Typography>{detail?.roomNumber}</Typography>
          <Typography>{detail?.bedType.toUpperCase()}</Typography>
      </Box>
      <Typography>${detail?.price}</Typography>

      <Typography>{detail?.description}</Typography>
      <Stack>
          {detail?.image.map(item => (
            <>
            <img src={item} alt={detail?.roomNumber} width={250} style={{borderRadius:".3rem"}} />
            </>
          ))}
      </Stack>
    </Stack>
  </Box>
  )
}

export default RoomCard