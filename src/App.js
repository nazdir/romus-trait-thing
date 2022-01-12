import React, { useState } from 'react';
import { Grid, Button, Stepper, Step, StepLabel } from '@material-ui/core';
import { Upload } from './pages/Upload.js';
import { Verify } from './pages/Verify.js';
import './style.css';

export default function App() {
  const [page, setPage] = useState('upload');
  return (
    <>
      <Button onClick={() => setPage('upload')}>Upload</Button>
      <Button onClick={() => setPage('verify')}>Verify</Button>
      <hr />

      <Stepper activeStep={page === 'upload' ? 0 : page === 'verify' ? 1 : 0}>
        <Step>
          <StepLabel>Upload</StepLabel>
        </Step>
        <Step>
          <StepLabel>Verify</StepLabel>
        </Step>
        <Step>
          <StepLabel>Modify</StepLabel>
        </Step>
        <Step>
          <StepLabel>Submit</StepLabel>
        </Step>
      </Stepper>
      <br />
      <br />
      <br />
      <br />
      <div>{page === 'upload' && <Upload />}</div>
      <div>{page === 'verify' && <Verify />}</div>
    </>
  );
}
