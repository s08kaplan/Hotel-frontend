import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from "./Button"

export default function LoginForm() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display:"flex", justifyContent:"center", alignItems:"center"}}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{justifyContent:"center", alignItems:"center",border:"2px solid gray", width:"25rem", height:"30rem", borderRadius:".4rem", boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)"}}>
        <TextField
          required
          id="outlined-username-input"
          label="Username"
          type='text'
        />
        <TextField
          required
          id="outlined-email-input"
          label="Email"
          type='text'
        />
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      <Button/>
      </Stack>
    </Box>
  );
}