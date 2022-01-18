import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { default as React, default as React } from 'react';

const Content = () => (
  <>
    <Button>ROCK</Button>
  </>
);

export const Create = ({ open, setOpen }) => (
  <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth>
    <DialogTitle id="form-dialog-title">Modify Logic</DialogTitle>
    <DialogContent>
      <Content />
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
