import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useRooms from "../../custom-hooks/useRooms";
import { Box, Stack, Typography } from "@mui/material";
import RoomCard from "../../components/ROOM-CARD/RoomCard";

const RoomDetail = () => {
  // const { getRoomsInfo } = useRooms();
  // const { roomDetail } = useSelector((state) => state.room);
  // const { roomId } = useParams();

  // // console.log(roomId);
  // // console.log(roomDetail?.roomNumber);

  // useEffect(() => {
  //   getRoomsInfo("roomDetail", roomId);
  // }, []);

  return <RoomCard />;
};

export default RoomDetail;
