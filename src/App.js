import {
  Grid,
  ListItem,
  ListItemText,
  List,
  Collapse,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Create } from './modals/Create.js';
import { Base } from './pages/Base.js';
import { Import } from './pages/Import.js';
import { Verify } from './pages/Verify.js';
import './style.css';

const markets = ['DEKALB', 'Sasquatch', 'Duck', 'Ducksquatch'];

export default function App() {
  const [page, setPage] = useState('upload');
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  const steps = [
    { name: 'Base', component: <Import /> },
    { name: 'Create Pricing Rules', onClick: () => setOpen(true) },
    {
      name: 'Verify',
      component: <Verify />,
      onClick: () => setExpand(!expand),
    },
  ];

  return (
    <>
      <Grid container direction="row">
        <Grid item style={{ flexShrink: 1 }}>
          <List>
            {steps.map((o) => (
              <ListItem
                key={o.name}
                button
                onClick={o.onClick ? o.onClick : () => setPage(o.name)}
              >
                <ListItemText>{o.name}</ListItemText>
              </ListItem>
            ))}
            <Collapse in={expand}>
              {markets.map((m) => (
                <ListItem style={{ paddingLeft: 40 }}>
                  <ListItemText>{m}</ListItemText>
                </ListItem>
              ))}
            </Collapse>
          </List>
        </Grid>
        <Grid item style={{ padding: '32px' }} justify="center">
          {steps.map((s) => (
            <div key={s.name}>{page === s.name && s.component}</div>
          ))}
        </Grid>
      </Grid>

      <Create open={open} setOpen={setOpen} />
    </>
  );
}
