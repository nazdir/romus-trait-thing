import React from 'react';
import { Grid, Button, TextField, MenuItem } from '@material-ui/core';

export const Upload = () => {
  return (
    <>
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        helperText="select your file upload type"
        margin="normal"
      >
        <MenuItem value="Market Year">Market Year</MenuItem>
        <MenuItem value="Market Year">Crop</MenuItem>
        <MenuItem value="Market Year">Zone</MenuItem>
        <MenuItem value="Market Year">Year/Crop/Price</MenuItem>
      </TextField>
      <br />
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        style={{ display: 'none' }}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </>
  );
};
