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
  const [group, setGroup] = useState('Zone');

  const coeffs = {
    Zone: 0.1,
    Trait: 4,
    Brand: 3.2,
  };

  const c = coeffs[group];

  const rows = [
    createData(`${group} A`, 159 * c, 6.0 * c, 24 * c, 4.0 * c),
    createData(`${group} B`, 237 * c, 9.0 * c, 37 * c, 4.3 * c),
    createData(`${group} C`, 262 * c, 16.0 * c, 24 * c, 6.0 * c),
    createData(`${group} D`, 305 * c, 3.7 * c, 67 * c, 4.3 * c),
    createData(`${group} E`, 356 * c, 16.0 * c, 49 * c, 3.9 * c),
  ];

  const groups = ['Zone', 'Trait', 'Brand'];

  return (
    <>
      <Grid container justify="center">
        {groups.map((g) => (
          <Button
            color={group === g ? 'primary' : null}
            onClick={() => setGroup(g)}
          >
            {g}
          </Button>
        ))}
      </Grid>

      <Table style={{ width: '100%' }}>
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
