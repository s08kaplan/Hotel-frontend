import React from 'react'
import  Box  from '@mui/material/Box'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <Box>
       <Box sx={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", gap:"1rem"}}>
        <Link to="/authorized/clients">Clients</Link>
        <Link to="/authorized/reservations">Reservations</Link>
        </Box> 
    </Box>
  )
}

export default Dashboard