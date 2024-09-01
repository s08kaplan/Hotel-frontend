import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'


const Loading = () => {
  return (
    <Box>
        <Stack >
            <Stack>
                <Typography variant="h3">Loading</Typography>
                <Box>.</Box>
                <Box>.</Box>
                <Box>.</Box>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Loading