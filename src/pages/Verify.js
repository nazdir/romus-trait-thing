import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

let id = 0;
function createData(name, A, B, C, D) {
  id += 1;
  return { id, name, A, B, C, D };
}

const markets = ['DEKALB', 'Sasquach', 'Duck', 'Ducksquach'];

const rules = [
  {
    market: 'DEKALB',
    trait: 'Trait B',
    rule: '12% increase',
  },
  {
    market: 'Duck',
    trait: 'all',
    rule: '12% increase',
  },
];

const missing = [
  {
    market: 'DEKALB',
    traits: ['Trait A', 'Trait C', 'Trait D', 'Trait E'],
  },
  {
    market: 'Sasquach',
    traits: ['all'],
  },
  {
    market: 'Duck',
    traits: ['all'],
  },
];

const Tabel = () => {
  const rows = [
    createData(`Trait A`, 159, 6.0, 24, 4.0),
    createData(`Trait B`, 237, 9.0, 37, 4.3),
    createData(`Trait C`, 262, 16.0, 24, 6.0),
    createData(`Trait D`, 305, 3.7, 67, 4.3),
    createData(`Trait E`, 356, 16.0, 49, 3.9),
  ];

  return (
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
            <TableCell align="right">{Math.floor(row.A * 100) / 100}</TableCell>
            <TableCell align="right">{Math.floor(row.B * 100) / 100}</TableCell>
            <TableCell align="right">{Math.floor(row.C * 100) / 100}</TableCell>
            <TableCell align="right">{Math.floor(row.D * 100) / 100}</TableCell>
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
  );
};

const PricingRules = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Market</TableCell>
        <TableCell>Trait</TableCell>
        <TableCell>Rule</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {rules.map((r) => (
        <TableRow>
          <TableCell>{r.market}</TableCell>
          <TableCell>{r.trait}</TableCell>
          <TableCell>{r.rule}</TableCell>
          <TableCell>
            <Button>EDIT</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const MissingRules = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Market</TableCell>
        <TableCell>Trait</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {missing.map((r) => (
        <TableRow>
          <TableCell>{r.market}</TableCell>
          <TableCell>{r.traits.join(', ')}</TableCell>
          <TableCell>
            <Button>ADD</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Locked = ({ setIsLocked, name, allLocked }) => {
  const [locked, setLocked] = useState(false);
  const [timestamp, setTimestamp] = useState();

  useEffect(() => setIsLocked({ ...allLocked, [name]: locked }), [locked]);

  return (
    <>
      <Switch
        value={locked}
        onChange={() => {
          setLocked(!locked);
          setTimestamp(moment().format('LLLL'));
        }}
      ></Switch>
      <Typography>{locked ? `Locked on ${timestamp}` : ''}</Typography>
    </>
  );
};

export const Verify = () => {
  const [panel, setPanel] = useState('');
  const [isLocked, setIsLocked] = useState({});

  return (
    <>
      <Grid item>
        {markets.map((m) => (
          <ExpansionPanel
            expanded={panel === m}
            onChange={panel === m ? () => setPanel() : () => setPanel(m)}
          >
            <ExpansionPanelSummary>
              <Typography>
                {isLocked[m] && (
                  <span style={{ marginRight: 24 }}>lock icon here</span>
                )}
                {m}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container>
                <Grid item>
                  <Grid container direction="row" alignItems="center">
                    <Locked
                      name={m}
                      allLocked={isLocked}
                      setIsLocked={setIsLocked}
                    />
                  </Grid>
                  <Tabel />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </Grid>
      <Typography variant="h6" style={{ marginTop: 100 }}>
        Current Rules
      </Typography>
      <Grid item>
        <PricingRules />
      </Grid>
      <Typography variant="h6" style={{ marginTop: 100 }}>
        Missing Rules
      </Typography>
      <Grid item>
        <MissingRules />
      </Grid>
    </>
  );
};
