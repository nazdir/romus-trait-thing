import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from '@material-ui/core';
import { default as React, default as React } from 'react';
import { markets } from '../data.js';

const Content = () => (
  <>
    <FormControl style={{ width: '100%' }}>
      <Grid
        container
        spacing={60}
        direction="column"
        style={{ width: '100%' }}
        alignItems="center"
      >
        <Grid item>
          <InputLabel id="demo-simple-select-label">Market</InputLabel>
          <Select
            style={{ minWidth: 300 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Market"
          >
            {markets.map((m) => (
              <MenuItem value={m} width={1000}>
                {m}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <RadioGroup aria-label="inc" name="inc">
            <Grid direction="row" container>
              <FormControlLabel
                value="Increase"
                control={<Radio />}
                label="Increase"
              />
              <FormControlLabel
                value="Decrease"
                control={<Radio />}
                label="Decrease"
              />
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item>
          <RadioGroup aria-label="v" name="v">
            <Grid direction="row" container>
              <FormControlLabel
                value="Percentage"
                control={<Radio />}
                label="Percentage"
              />
              <FormControlLabel
                value="Flat Value"
                control={<Radio />}
                label="Flat Value"
              />
            </Grid>
          </RadioGroup>
        </Grid>

        <Grid item>
          <TextField label="Value" />
        </Grid>

        <Grid item>
          <TextField style={{ minWidth: 5 }} label="Rule Name" />
        </Grid>
      </Grid>
    </FormControl>
  </>
);

export const Create = ({ open, setOpen }) => (
  <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth>
    <DialogTitle id="form-dialog-title">Modify Logic</DialogTitle>
    <DialogContent>
      <Content />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)} color="primary">
        Cancel
      </Button>
      <Button onClick={() => setOpen(false)} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>
);
