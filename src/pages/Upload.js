import React from 'react';
import { Grid, Button, TextField, MenuItem } from '@material-ui/core';

export const Upload = () => {
  return (
    <>
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
