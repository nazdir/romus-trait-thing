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
  createData('Trait A', '12% gross up', 6.0, 24, 4.0),
  createData('Trait B', '5% something or another', 9.0, 37, 4.3),
  createData('Trait C', 'words that makes sense', 16.0, 24, 6.0),
  createData('Trait D', '8% herpy flerb', 3.7, 67, 4.3),
  createData('Trait E', 'Ducksquach', 16.0, 49, 3.9),
];

export const Modify = () => {
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
                <Button>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
