import React from 'react';
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
} from '@material-ui/core';

export const Create = ({ open, setOpen }) => (
  <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth>
    <DialogTitle id="form-dialog-title">Modify Logic</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Enter new logic I guess? I have no idea how this works so this is
        probably going to be very different actually.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Logic"
        type="text"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)} color="primary">
        Cancel
      </Button>
      <Button onClick={() => setOpen(false)} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>
);
