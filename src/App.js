import React, { useState, useEffect } from 'react';
import {
  Grid,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
} from '@material-ui/core';
import { Import } from './pages/Import.js';
import { Verify } from './pages/Verify.js';
import { Create } from './pages/Create.js';
import { Base } from './pages/Base.js';
import './style.css';

export default function App() {
  const [page, setPage] = useState('upload');
  const [open, setOpen] = useState(false);

  const steps = [
    { name: 'Base', component: <Base /> },
    { name: 'Import', component: <Import /> },
    { name: 'Create Pricing Rules', onClick: () => setOpen(true) },
    { name: 'Verify', component: <Verify /> },
  ];

  return (
    <>
      <Grid container direction="row">
        <Grid item style={{ flexShrink: 1 }}>
          {steps.map((o) => (
            <ListItem
              key={o.name}
              button
              onClick={o.onClick ? o.onClick : () => setPage(o.name)}
            >
              <ListItemText>{o.name}</ListItemText>
            </ListItem>
          ))}
        </Grid>
        <Grid item style={{ flexGrow: 1, padding: '32px' }} justify="center">
          {steps.map((s) => (
            <div key={s.name}>{page === s.name && s.component}</div>
          ))}
        </Grid>
      </Grid>

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
}
