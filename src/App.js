import React, { useState, useEffect } from 'react';
import { Grid, ListItem, ListItemText } from '@material-ui/core';
import { Upload } from './pages/Upload.js';
import { Verify } from './pages/Verify.js';
import { Create } from './pages/Create.js';
import './style.css';

const steps = ['Import', 'Create Pricing Rules', 'Verify'];

export default function App() {
  const [page, setPage] = useState('upload');

  return (
    <>
      <Grid container direction="row">
        <Grid item style={{ flexShrink: 1 }}>
          {steps.map((o) => (
            <ListItem button onClick={() => setPage(o)}>
              <ListItemText>{o}</ListItemText>
            </ListItem>
          ))}
        </Grid>
        <Grid item style={{ flexGrow: 1, padding: '32px' }} justify="center">
          <div>{page === 'Import' && <Upload />}</div>
          <div>{page === 'Create Pricing Rules' && <Create />}</div>
          <div>{page === 'Verify' && <Verify />}</div>
        </Grid>
      </Grid>
    </>
  );
}
