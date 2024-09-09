import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useRooms from "../../custom-hooks/useRooms";
import { Box } from "@mui/material";
import MyButton from "../FORM-INPUTS/MyButton";
import logo from "../../assets/images/logo.png";
import Grid from "@mui/material/Grid2";
import RatingStatus from "../../components/RATING/RatingStatus"

const RoomCard = () => {
  const { roomId } = useParams();

  const { rooms, roomDetail } = useSelector((state) => state.room);
  const { getRoomsInfo } = useRooms();
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/room-detail/${id}`);
  };

  useEffect(() => {
    roomId ? getRoomsInfo("roomDetail", roomId) : getRoomsInfo();
  }, [roomId]);

  console.log(rooms);
  console.log(roomDetail);

  return (
    <Grid container spacing={4} sx={{placeContent:"center", padding:"1rem"}}>
      {" "}
      {/* Add spacing between grid items */}
      {roomId ? (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {" "}
          {/* Single room detail view */}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ backgroundColor: "navy" }}
                  aria-label={roomDetail?.title}
                >
                  <img src={logo} alt={roomDetail?.roomNumber} width={50} />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={roomDetail?.roomNumber}
              subheader={new Date(roomDetail?.createdAt).toLocaleDateString()}
            />
            <CardMedia
              component="img"
              height="194"
              image={roomDetail?.image}
              alt={roomDetail?.bedType}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {roomDetail?.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <RatingStatus roomRating={roomDetail?.averageRating} id={roomDetail._id}/>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ) : (
        rooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={room._id}>
            {" "}
            {/* Grid item for each room */}
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                    {room.roomNumber}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={room.bedType}
                subheader={new Date(room.createdAt).toLocaleDateString()}
              />
              <CardMedia
                component="img"
                height="194"
                image={room.image[0]}
                alt={room.roomNumber}
              />
              <CardContent >
                <Typography
                  variant="body2"
                  sx={{
                    width:"25rem",
                    color: "text.secondary",
                    webkitBoxOrient: "vertical",
                    webkitLineClamp: "3",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    lineHeight: "1.5rem",
                    height: "calc(1.5rem * 3)",
                  }}
                >
                  {room.description}
                  
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
             <RatingStatus roomsRatings={room.averageRating}/>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <MyButton onClick={() => handleNavigate(room._id)}>
                  Detail
                </MyButton>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default RoomCard;