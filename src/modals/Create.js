import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import { default as React, default as React } from 'react';
import { markets } from '../data.js';

const Content = () => (
  <>
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Market</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select">
        {markets.map((m) => (
          <MenuItem value={m}>{m}</MenuItem>
        ))}
      </Select>
    </FormControl>
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
