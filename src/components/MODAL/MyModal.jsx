import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.primary.main",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function MyModal({ open, onClose, children }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box sx={style}>{children}</Box> */}
      <Box>{children}</Box>
    </Modal>
  );
}
