import React, { useState } from "react";
import dayjs from "dayjs";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import 'react-date-range/dist/styles.css'; // Main css file
import 'react-date-range/dist/theme/default.css'; // Theme css file
import  Box  from "@mui/material/Box";

const Calendar = () => {
  const [range, setRange] = useState([
    {
      startDate: dayjs().toDate(),
      endDate: addDays(new Date(), 7), // Default end date 7 days after the start date
      key: 'selection'
    }
  ]);

  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems: "center", border:"2px solid gray", borderRadius:".5rem", padding:".5rem"}}>
      <DateRangePicker
        ranges={range}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
      />
    </Box>
  );
};

export default Calendar;

