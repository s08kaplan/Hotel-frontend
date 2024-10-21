import React, { useEffect, useState } from "react";
import useAxios from "../../custom-hooks/useAxios";
import { useSelector } from "react-redux";
import { Tooltip } from '@mui/material';
import AuthorizedTable from "./AuthorizedTable";
import avatar from "../../assets/images/avatar.png"

const Clients = () => {
  const { clients } = useSelector((state) => state.authorized);
  // const { axiosWithToken } = useAxios();
  // const [info, setInfo] = useState({
  //   clients: [],
  //   reservations: [],
  // });

  

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value || avatar}
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
    { field: "username", headerName: "Username", width: 120 },
    // { field: 'firstName', headerName: 'First name', width: 130 },
    // { field: 'lastName', headerName: 'Last name', width: 130 },

    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
  ];

  const rows = clients?.map((client) => ({
    id: client._id,
    firstName: client.firstName || "",
    lastName: client.lastName || "",
    username: client.username || "",
    image: client.image || "",
    email: client.email || "",
  }));

  const paginationModel = { page: 0, pageSize: 5 };

  console.log(clients);

  return (
    <AuthorizedTable
    columns={columns}
    rows={rows}
    dropdownLabel="Clients"
    renderDropdownItem={(row) => (
      <div>
        <div>ID: {row.id}</div>
        <div>Username: {row.username}</div>
        <div>email: {row.email}</div>
      </div>
    )}
    />
  );
};

export default Clients;
