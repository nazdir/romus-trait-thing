import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import './style.css';

export default function App() {
  const [page, setPage] = useState();
  return (
    <>
      <Button>Upload</Button>
      <Button>Default</Button>
      <Button>Default</Button>
      <Button>Default</Button>
      <Button>Default</Button>
      <Button>Default</Button>

      <Grid>
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
        </div>
      </Grid>
    </>
  );
}
