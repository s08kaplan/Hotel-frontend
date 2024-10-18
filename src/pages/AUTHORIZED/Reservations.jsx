import React from 'react'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import AuthorizedTable from './AuthorizedTable';



const paginationModel = { page: 0, pageSize: 5 };

const Reservations = () => {
  const { reservations } = useSelector(state => state.authorized)

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            borderRadius:"50%"
          }}
        />
      ),
    },
    { field: 'bedType', headerName: 'Type', width: 90 },
    { field: 'arrival_date', headerName: 'Arrival', width: 90 },
    { field: 'departure_date', headerName: 'Departure', width: 90 },
    {
      field: 'totalPrice',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
    {
      field: 'userName',
      headerName: 'Username',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
    }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  console.log(reservations);
  return (
    <AuthorizedTable
    columns={columns}
    rows={rows}
    dropdownLabel="Clients"
    // renderDropdownItem={(row) => (
    //   <div>
    //     <div>{row.username} (email: {row.email})</div>
    //     <div>ID: {row.id}</div>
    //   </div>
    // )}
    />
  )
}

export default Reservations