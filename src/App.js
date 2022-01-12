import React, { useState, useEffect } from 'react';
import { Grid, Button, Stepper, Step, StepLabel } from '@material-ui/core';
import { Upload } from './pages/Upload.js';
import { Verify } from './pages/Verify.js';
import './style.css';

const buttons = ['Upload', 'Verify', 'Modify Logic'];

export default function App() {
  const [page, setPage] = useState('upload');
  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(buttons.indexOf(page));
  }, [page]);

  return (
    <>
      <div style={{ background: 'black', opacity: 0.75 }}>
        {buttons.map((b) => (
          <Button color="primary" onClick={() => setPage(b)}>
            {b}
          </Button>
        ))}
      </div>

      <Stepper activeStep={step}>
        <Step>
          <StepLabel>Upload</StepLabel>
        </Step>
        <Step>
          <StepLabel>Verify</StepLabel>
        </Step>
        <Step>
          <StepLabel>Modify Logic</StepLabel>
        </Step>
        <Step>
          <StepLabel>Submit</StepLabel>
        </Step>
      </Stepper>
      <hr style={{ margin: '3rem' }} />
      <Grid container justify="center">
        <div>{page === 'Upload' && <Upload />}</div>
        <div>{page === 'Verify' && <Verify />}</div>
      </Grid>
    </>
  );
}
