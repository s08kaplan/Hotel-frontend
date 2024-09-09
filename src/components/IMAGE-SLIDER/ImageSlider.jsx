import React, { useState, useEffect, useCallback } from "react";
import { Box, IconButton, Typography, Stack } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";

const images = [
  {
    src: "https://source.unsplash.com/random/800x600?nature",
    label: "Beautiful Nature",
  },
  {
    src: "https://source.unsplash.com/random/800x600?city",
    label: "City View",
  },
  {
    src: "https://source.unsplash.com/random/800x600?ocean",
    label: "Ocean",
  },
  {
    src: "https://source.unsplash.com/random/800x600?forest",
    label: "Forest",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalImages = images.length;

  // Autoplay interval time in ms (3000 = 3 seconds)
  const autoPlayTime = 3000;

  // Handles the auto-play logic
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        handleNext();
      }, autoPlayTime);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isHovered]);

  // Navigate to the previous image
  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  }, [totalImages]);

  // Navigate to the next image
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  }, [totalImages]);

  // Swipe handling for mobile
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Box
      sx={{
        width: "80%",
        height: "500px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
      {...handlers}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Slide */}
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image.src}
          alt={image.label}
          sx={{
            display: currentIndex === index ? "block" : "none",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}

      {/* Image Label */}
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          left: "30px",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "10px 20px",
          borderRadius: "4px",
        }}
      >
        <Typography variant="h6">
          {images[currentIndex].label}
        </Typography>
      </Box>

      {/* Prev Button */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Pagination Dots */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: currentIndex === index ? "15px" : "10px",
              height: currentIndex === index ? "15px" : "10px",
              backgroundColor: currentIndex === index ? "#fff" : "#ccc",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ImageSlider;