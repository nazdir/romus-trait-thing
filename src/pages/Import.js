import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import React, { useState } from 'react';
import { markets } from '../data.js';

let id = 0;
function createData(name, A, B, C, D) {
  id += 1;
  return {
    id,
    name,
    // data: [A, B, C, D, A * 1.1, B * 0.98, C * 1.9, A + B / C],
    data: [A, B, C, D, A * 1.1],
  };
}

const rows = [
  createData('Trait A', 6.0, 24, 4.0, 5),
  createData('Trait B', 9.0, 37, 4.3, 6),
  createData('Trait C', 16.0, 24, 6.0, 6.1),
  createData('Trait D', 3.7, 67, 4.3, 8.2),
  createData('Trait E', 16.0, 49, 3.9, 9.7),
];

const Tabel = () => {
  return (
    <Table style={{ width: '100%', margin: 40 }}>
      <TableHead>
        <TableRow>
          <TableCell align="center" width="100px">
            Trait
          </TableCell>
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
  const [checked, setChecked] = useState({});
  return (
    <>
      <Typography variant="body1">US / Corn / 2077</Typography>
      <FormGroup row style={{ marginBottom: 40 }}>
        {markets.map((m) => (
          <FormControlLabel control={<Checkbox name={m} />} label={m} />
        ))}
      </FormGroup>
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
        <TextField style={{ minWidth: 500, padding: 20 }} value={file} />
      </label>
      <Tabel />
      <Button variant="contained">Save Base</Button>
    </>
  );
};
