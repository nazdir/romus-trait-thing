import React, { useState } from 'react';
import {
  Grid,
  Button,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@material-ui/core';

let id = 0;
function createData(name, A, B, C, D) {
  id += 1;
  return { id, name, A, B, C, D };
}

const rows = [
  createData('Trait A', '12% gross up', 6.0, 24, 4.0),
  createData('Trait B', '5% something or another', 9.0, 37, 4.3),
  createData('Trait C', 'words that makes sense', 16.0, 24, 6.0),
  createData('Trait D', '8% herpy flerb', 3.7, 67, 4.3),
  createData('Trait E', 'Ducksquach', 16.0, 49, 3.9),
];

export const Modify = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Trait</TableCell>
            <TableCell align="center">Logic</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.A}</TableCell>
              <TableCell align="center">
                <Button onClick={() => setOpen(true)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
    </>
  );
};
