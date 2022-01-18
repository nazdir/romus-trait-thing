import React, { useState } from 'react';
import { Create } from './Create.js';
import {
  Grid,
  Button,
  TextField,
  MenuItem,
  Grid,
  Button,
  TableHead,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
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

import { MdExpandMore } from 'react-icons/md';

let id = 0;
function createData(name, A, B, C, D) {
  id += 1;
  return {
    id,
    name,
    data: [A, B, C, D, A * 1.1, B * 0.98, C * 1.9, A + B / C],
  };
}

const rows = [
  createData('Trait A', 6.0, 24, 4.0, 5),
  createData('Trait B', 9.0, 37, 4.3, 6),
  createData('Trait C', 16.0, 24, 6.0, 6.1),
  createData('Trait D', 3.7, 67, 4.3, 8.2),
  createData('Trait E', 16.0, 49, 3.9, 9.7),
];

const markets = ['DEKALB', 'Sasquach', 'Duck', 'Ducksquach'];

const Tabel = () => {
  return (
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell align="center">Trait</TableCell>
          {rows[0].data.map((d, idx) => (
            <TableCell align="center">{`Zone ${idx + 1}`}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>

            {row.data.map((d) => (
              <TableCell align="right">
                <TextField
                  id="standard-name"
                  value={Math.floor(d * 100) / 100}
                  margin="normal"
                >
                  {Math.floor(d * 100) / 100}
                </TextField>
                {/* {Math.floor(d * 100) / 100} */}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const Import = () => {
  const [file, setFile] = useState();
  const [panel, setPanel] = useState('');
  return (
    <>
      <Grid container spacing={2} direction="row">
        <Grid item style={{ flexGrow: 1 }}>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.value)}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Upload New File
            </Button>
            <TextField style={{ minWidth: 500 }} value={file} />
          </label>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Button variant="contained">Save Base</Button>
        </Grid>

        {markets.map((m) => (
          <ExpansionPanel expanded={panel === m} onChange={() => setPanel(m)}>
            {/* <ExpansionPanelSummary 
            // expandIcon={<MdExpandMore 
            />}>
              <Typography>General settings</Typography>
              <Typography>I am an expansion panel</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Tabel />
            </ExpansionPanelDetails> */}
          </ExpansionPanel>
        ))}
      </Grid>
    </>
  );
};
