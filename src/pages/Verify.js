import React from 'react';
import {
  Grid,
  Button,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

let id = 0;
function createData(name, A, B, C, D) {
  id += 1;
  return { id, name, A, B, C, D };
}

const rows = [
  createData('Product A', 159, 6.0, 24, 4.0),
  createData('Product B', 237, 9.0, 37, 4.3),
  createData('Product C', 262, 16.0, 24, 6.0),
  createData('Product D', 305, 3.7, 67, 4.3),
  createData('Product E', 356, 16.0, 49, 3.9),
];

export const Verify = () => {
  return (
    <>
      <Grid container justify="center">
        <Button>Zone</Button>
        <Button>Trait</Button>
        <Button>Brand</Button>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Stuff</TableCell>
            <TableCell align="right">Junk</TableCell>
            <TableCell align="right">Things</TableCell>
            <TableCell align="right">Wosit</TableCell>
            <TableCell align="right">Dohickie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.A}</TableCell>
              <TableCell align="right">{row.B}</TableCell>
              <TableCell align="right">{row.C}</TableCell>
              <TableCell align="right">{row.D}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
