// import { Box, Button } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
// import { styled, alpha } from "@mui/material/styles";
// import { useDebounce } from "../../custom-hooks/DEBOUNCE/useDebounce";
// import { useSelector } from "react-redux";


// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// const roomOptions = [
//   "Single Room",
//   "Double Room",
//   "Family Room",
//   "VIP Room"
// ];

// const Searchbar = () => {
//   const { token } = useSelector(state => state.auth)
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedOption, setSelectedOption] = useState(null);

//   const navigate = useNavigate();

//   const debouncedValue = useDebounce(searchTerm,500)

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value)
//   };

 
//   return (
//     <Box>
//       {/* <input
//          type="text"
//          value={searchTerm || ""}
//          onChange={(e) => setSearchTerm(e.target.value)}
//          />
//          <Button>Search</Button> */}
//       <Search sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder="Search for rooms…"
//           inputProps={{ "aria-label": "search" }}
//           value={searchTerm || ""}
//           onChange={handleSearchChange}
//         />
//       </Search>
//     </Box>
//   );
// };

// export default Searchbar;


import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useDebounce } from "../../custom-hooks/DEBOUNCE/useDebounce";

// Styled Search container
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// Styled wrapper for the Search Icon
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Styled input base for the search bar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// Room options
const roomOptions = [
  "Single Room",
  "Double Room",
  "Family Room",
  "VIP Room"
];

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();
  const debouncedValue = useDebounce(searchTerm, 500);

  // Handle input change and filter the suggestions based on user input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter options based on the search term
    const filtered = roomOptions.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);

    // Show suggestions if there is input and suggestions available
    setShowSuggestions(value.length > 0 && filtered.length > 0);
  };

  // Handle when an option is clicked
  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setShowSuggestions(false);
   
navigate("/rooms")
    console.log(`Selected: ${option}`);
  };

  // Close suggestions on blur or selection
  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100); // Delay to allow option click before closing
  };

  return (
    <Box position="relative">
      <Search sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for rooms…"
          inputProps={{ "aria-label": "search" }}
          value={searchTerm || ""}
          onChange={handleSearchChange}
          onFocus={() => setShowSuggestions(filteredOptions.length > 0)}
          onBlur={handleBlur}
        />
      </Search>

      {/* Render suggestions dropdown if showSuggestions is true */}
      {showSuggestions && (
        <Box
          sx={{
            position: "absolute",
            top: "40px", // Adjust based on the height of the search input
            backgroundColor: "#5398DD",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            width: "100%",
            zIndex: 1000,
            borderRadius: "4px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filteredOptions.map((option, index) => (
            <Box
              key={index}
              sx={{
                padding: "8px 16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: alpha("#1976d2", 0.15),
                },
              }}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Searchbar;

