import React, { useState } from 'react';
import {
  Grid,
  Button,
  Switch,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import { MdLock, MdLockOpen } from 'react-icons';

let id = 0;
function createData(name, A, B, C, D) {
  id += 1;
  return { id, name, A, B, C, D };
}

export const Verify = () => {
  const [locked, setLocked] = useState(false);
  const [timestamp, setTimestamp] = useState();

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
      <Grid column direction="column">
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Switch
              // checkedIcon={<MdLock />}
              icon={<MdLockOpen />}
              value={locked}
              onChange={() => {
                setLocked(!locked);
                setTimestamp(moment().format('LLLL'));
              }}
            ></Switch>
            <Typography>{locked ? `Locked on ${timestamp}` : ''}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Table style={{ width: '100%' }}>
            <TableHead>
              <TableRow>
                <TableCell align="center" rowSpan={2}>
                  Trait
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Zone 1
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Zone 2
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Zone 3
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Zone 4
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Base</TableCell>
                <TableCell align="center">Final</TableCell>
                <TableCell align="center">Base</TableCell>
                <TableCell align="center">Final</TableCell>
                <TableCell align="center">Base</TableCell>
                <TableCell align="center">Final</TableCell>
                <TableCell align="center">Base</TableCell>
                <TableCell align="center">Final</TableCell>
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
                  <TableCell align="right">
                    {Math.floor(row.A * 100 * 2.1) / 100}
                  </TableCell>
                  <TableCell align="right">
                    {Math.floor(row.B * 100 * 2.1) / 100}
                  </TableCell>
                  <TableCell align="right">
                    {Math.floor(row.C * 100 * 2.1) / 100}
                  </TableCell>
                  <TableCell align="right">
                    {Math.floor(row.D * 100 * 2.1) / 100}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
};
