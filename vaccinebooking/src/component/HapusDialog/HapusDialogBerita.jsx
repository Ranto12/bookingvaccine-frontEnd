import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box, ButtonGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

export default function HapusDialogBerita({ 
  open, 
  handleClose, 
  handleSubmit }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            className="d-flex justify-content-center"
            id="alert-dialog-description"
          >
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "32px",
                color: "#4E7EA7",
                textAlign: "center",
                px: "5vw",
              }}
            >
              Hapus Berita?
            </Box>
          </DialogContentText>
        </DialogContent>
        <ThemeProvider theme={theme}>
          <ButtonGroup
            className="pt-2"
            color="primary"
            fullWidth
            disableElevation
            variant="outlined"
            size="large"
          >
            <Button
              onClick={handleClose}
              sx={{ bgcolor: "#FFFFFF", color: "#4E7EA7", py: "2vh" }}
            >
              Kembali
            </Button>
            <Button
              onClick={handleSubmit}
              sx={{ bgcolor: "#7BD9E8", color: "#4E7EA7", py: "2vh" }}
            >
              Konfirmasi
            </Button>
          </ButtonGroup>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}