import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';

export const Verify = () => {
  return (
    <>
      <TextField label="File" />
      <Button variant="contained">Upload file</Button>
    </>
  );
};
