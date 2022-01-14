import React, { useState } from 'react';
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

export const Verify = () => {
  const coeffs = {
    Zone: 0.1,
    Trait: 4,
    Brand: 3.2,
  };

  const rows = [
    createData(`Trait A`, 159, 6.0, 24, 4.0),
    createData(`Trait B`, 237, 9.0, 37, 4.3),
    createData(`Trait C`, 262, 16.0, 24, 6.0),
    createData(`Trait D`, 305, 3.7, 67, 4.3),
    createData(`Trait E`, 356, 16.0, 49, 3.9),
  ];

  const groups = ['Zone', 'Trait', 'Brand'];

  return (
    <>
      <Table style={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell>Trait</TableCell>
            <TableCell align="right">Zone 1</TableCell>
            <TableCell align="right">Zone 2</TableCell>
            <TableCell align="right">Zone 3</TableCell>
            <TableCell align="right">Zone 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {Math.floor(row.A * 100) / 100}
              </TableCell>
              <TableCell align="right">
                {Math.floor(row.B * 100) / 100}
              </TableCell>
              <TableCell align="right">
                {Math.floor(row.C * 100) / 100}
              </TableCell>
              <TableCell align="right">
                {Math.floor(row.D * 100) / 100}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
