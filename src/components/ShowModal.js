import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Face5Icon from "@mui/icons-material/Face5";
import Typography from "@mui/material/Typography";
import dianpic from "../dianpic.jpg";

import "../styles/ShowModal.css";

import React, { useState } from "react";

//style for Box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "30vw",
  bgcolor: "#a7bcdb",
  border: "5px solid #000",
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
};

function ShowModal({
  showAbout,
  buttonTitle = "button",
  title,
  desc,
  appFrontEnd,
  AppBackEnd,
}) {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  // if (appFrontEnd.length > 35 || AppBackEnd.length > 35 || desc.length > 35)
  //   style.width = 550;

  if (showAbout) {
    return (
      <div>
        <Button onClick={handleOpen}>
          <Face5Icon className="icon" />
        </Button>
        <Modal
          open={open}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography id="modal-title" variant="h5" component="h2">
                  {title}
                </Typography>
                <Avatar
                  src={dianpic}
                  alt="dianP"
                  sx={{ width: 60, height: 60 }}
                />
              </div>

              <p>
                coded by <b>Dian Pratama</b> Jan 2023
                <br /> <br />
                {desc ? { desc } : ""}
              </p>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                <p>
                  <b>Front-End:</b> {appFrontEnd}
                </p>
                <br />
                <p>
                  <b>Back-End:</b> {AppBackEnd}
                </p>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Button onClick={handleOpen}>{buttonTitle}</Button>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="modal-title" variant="h6" component="h2">
                {title}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {desc}
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default ShowModal;
