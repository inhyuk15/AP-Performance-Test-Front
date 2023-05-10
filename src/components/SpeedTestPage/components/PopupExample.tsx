import React, { useState } from 'react';
// import {
// Button,
// Dialog,
// DialogTitle,
// DialogContent,
// DialogContentText,
// DialogActions,
// } from '@material-ui/core';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

function PopupExample() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        팝업 열기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>새로운 정보</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이곳에 새로운 정보를 입력하세요.
          </DialogContentText>
          {/* 여기에 새로운 정보를 입력하는 컴포넌트를 추가할 수 있습니다. */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopupExample;
